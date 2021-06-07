package tht.closure.operator.service;

import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.security.dto.JwtResponse;
import tht.closure.operator.security.dto.LoginRequestDto;
import tht.closure.operator.security.dto.RegisterRequestDto;

import javax.servlet.http.HttpServletRequest;

public interface AuthService {

    void userRegister(RegisterRequestDto registerDto);

    JwtResponse userLogin(LoginRequestDto loginRequestDto);

    UserDto getUserFromJwt(HttpServletRequest request);
}
