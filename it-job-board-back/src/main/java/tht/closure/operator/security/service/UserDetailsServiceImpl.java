package tht.closure.operator.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.model.exception.main.ResourceNotFoundException;
import tht.closure.operator.repository.UserRepository;

import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetailsImpl loadUserByUsername(String username) throws ResourceNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new ResourceNotFoundException(String.format("This username: '%s' does not exist", username));
        }
        return UserDetailsImpl.build(user);
    }

}
