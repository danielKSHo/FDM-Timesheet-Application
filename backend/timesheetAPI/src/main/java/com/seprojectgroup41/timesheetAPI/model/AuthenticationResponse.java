package com.seprojectgroup41.timesheetAPI.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AuthenticationResponse {
    private String token;
    private String message;
}
