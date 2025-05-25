package com.github.driftlog.splitwise.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.github.driftlog.splitwise.exception.UserExistsException;

@ControllerAdvice
public class ExceptionController {
    
    @ResponseStatus()
    @ExceptionHandler(UserExistsException.class)
    public ResponseEntity<String> userExists() {
        ResponseEntity<String> resp = ResponseEntity.badRequest().body("User already exists");
        return resp;
    }


}
