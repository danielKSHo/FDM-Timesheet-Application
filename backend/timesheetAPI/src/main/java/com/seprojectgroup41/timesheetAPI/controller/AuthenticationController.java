package com.seprojectgroup41.timesheetAPI.controller;

import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.model.AuthenticationResponse;
import com.seprojectgroup41.timesheetAPI.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody Employee request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody Employee request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}
