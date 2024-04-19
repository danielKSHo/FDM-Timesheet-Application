package com.seprojectgroup41.timesheetAPI.service;

import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.entity.Token;
import com.seprojectgroup41.timesheetAPI.model.AuthenticationResponse;
import com.seprojectgroup41.timesheetAPI.repository.EmployeeRepository;
import com.seprojectgroup41.timesheetAPI.repository.TokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AuthenticationService {
    private final EmployeeRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    private final TokenRepository tokenRepository;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Employee request) {
        Employee employee = new Employee();
        employee.setFirstName(request.getFirstName());
        employee.setLastName(request.getLastName());
        employee.setUsername(request.getUsername());
        employee.setPassword(passwordEncoder.encode(request.getPassword()));
        employee.setRole(request.getRole());

        Employee savedEmployee = repository.save(employee);

        String token = jwtService.generateToken(savedEmployee);

        saveUserToken(token, savedEmployee);

        return new AuthenticationResponse(token, "Employee registration was successful");
    }

    public AuthenticationResponse authenticate(Employee request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        Employee employee = repository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.generateToken(employee);

        revokeAllTokenByUser(employee);
        saveUserToken(token, employee);

        return new AuthenticationResponse(token, "user login was successful");
    }

    private void revokeAllTokenByUser(Employee employee) {
        List<Token> validTokens = tokenRepository.findAllTokensByUser(employee.getEmpId());
        if(validTokens.isEmpty()) {
            return;
        }

        validTokens.forEach(t-> {
            t.setLoggedOut(true);
        });

        tokenRepository.saveAll(validTokens);
    }

    private void saveUserToken(String jwt, Employee employee) {
        Token token = new Token();
        token.setToken(jwt);
        token.setLoggedOut(false);
        token.setEmployee(employee);
        tokenRepository.save(token);
    }
}