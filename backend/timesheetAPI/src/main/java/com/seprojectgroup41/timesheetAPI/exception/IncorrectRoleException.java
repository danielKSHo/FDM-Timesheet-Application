package com.seprojectgroup41.timesheetAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class IncorrectRoleException extends RuntimeException{
    public IncorrectRoleException(String message) {
        super(message);
    }
}
