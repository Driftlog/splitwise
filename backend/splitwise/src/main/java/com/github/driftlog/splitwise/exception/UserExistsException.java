package com.github.driftlog.splitwise.exception;


public class UserExistsException extends RuntimeException {

    public UserExistsException(String message, String email) {
        super(message);
    }
    
    public UserExistsException(String message, Throwable t) {
        super(message, t);
    }
}
