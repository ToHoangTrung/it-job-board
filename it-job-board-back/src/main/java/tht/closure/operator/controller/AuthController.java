package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.security.dto.JwtResponse;
import tht.closure.operator.security.dto.LoginRequestDto;
import tht.closure.operator.security.dto.RegisterRequestDto;
import tht.closure.operator.service.AuthService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController extends AbstractController{

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<Object> userRegister(@RequestBody RegisterRequestDto registerRequestDto)  {
        authService.userRegister(registerRequestDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginRequestDto loginRequestDto) {
        JwtResponse jwtResponse = authService.userLogin(loginRequestDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(jwtResponse);
    }
}
