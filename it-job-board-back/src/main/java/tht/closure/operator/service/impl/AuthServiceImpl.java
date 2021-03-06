package tht.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.entity.Recruiter;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.model.exception.user.PasswordNotCorrectException;
import tht.closure.operator.repository.CandidateRepository;
import tht.closure.operator.repository.RecruiterRepository;
import tht.closure.operator.repository.UserRepository;
import tht.closure.operator.security.dto.JwtResponse;
import tht.closure.operator.security.dto.LoginRequestDto;
import tht.closure.operator.security.dto.RegisterRequestDto;
import tht.closure.operator.security.jwt.AuthTokenFilter;
import tht.closure.operator.security.jwt.JwtUtils;
import tht.closure.operator.security.service.UserDetailsImpl;
import tht.closure.operator.service.AuthService;
import tht.closure.operator.util.CandidateMapper;
import tht.closure.operator.util.RecruiterMapper;
import tht.closure.operator.util.UserMapper;
import tht.closure.operator.validator.AuthValidator;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Autowired
    private AuthValidator authValidator;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthTokenFilter authTokenFilter;

    @Override
    public void userRegister(RegisterRequestDto registerDto) {
        authValidator.validateRegisterRequest(registerDto);
        User user = new User(registerDto.getUsername(), registerDto.getEmail(), encoder.encode(registerDto.getPassword()), registerDto.getRole());
        userRepository.save(user);
        if (registerDto.getRole().equals(User.Role.ROLE_CAN.name())) {
            Candidate candidate = new Candidate();
            candidate.setUser(user);
            candidateRepository.save(candidate);
        }
        else {
            Recruiter recruiter = new Recruiter();
            recruiter.setUser(user);
            recruiterRepository.save(recruiter);
        }
    }

    @Override
    public JwtResponse userLogin(LoginRequestDto loginRequestDto) {
        User user = authValidator.getUserIfExist(loginRequestDto.getEmail());
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequestDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
            return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles.get(0));
        } catch (Exception e){
            throw new PasswordNotCorrectException("Password does not correct");
        }
    }

    @Override
    public UserDto getUserInfoFromJwt(HttpServletRequest request) {

        String token = authTokenFilter.parseJwt(request);
        if (token != null) {
            String username = jwtUtils.getUserNameFromJwtToken(token);

            User user = userRepository.findByUsername(username);
            UserDto userDto = UserMapper.userToUserDto(user);

            if (user.getRole().equals(User.Role.ROLE_CAN)) {
                Candidate candidate = candidateRepository.findByUserId(user.getId());
                CandidateDto candidateDto = CandidateMapper.candidateToCandidateDto(candidate);
                userDto.setCandidateInfo(candidateDto);
            }
            else if (user.getRole().equals(User.Role.ROLE_REC)) {
                Recruiter recruiter = recruiterRepository.findByUserId(user.getId());
                RecruiterDto recruiterDto = RecruiterMapper.recruiterToRecruiterDto(recruiter);
                userDto.setRecruiterInfo(recruiterDto);
            }

            return userDto;
        }
        return null;
    }

    @Override
    public CandidateDto getCandidateFromJwt(HttpServletRequest request) {
        String token = authTokenFilter.parseJwt(request);
        if (token != null) {
            String username = jwtUtils.getUserNameFromJwtToken(token);

            User user = userRepository.findByUsername(username);
            if (user.getRole().equals(User.Role.ROLE_CAN)) {
                Candidate candidate = candidateRepository.findByUserId(user.getId());
                return CandidateMapper.candidateToCandidateDto(candidate);
            }
        }
        return null;
    }
}
