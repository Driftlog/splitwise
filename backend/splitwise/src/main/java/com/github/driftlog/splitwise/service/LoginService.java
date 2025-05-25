package com.github.driftlog.splitwise.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.driftlog.splitwise.repo.UserRepo;
import com.github.driftlog.splitwise.exception.UserExistsException;
import com.github.driftlog.splitwise.model.User;
import java.util.UUID;


@Service
public class LoginService {

    @Autowired
    UserRepo userRepo;
    
    public Optional<User> getUser(String email, String password) {
        Optional<User> user  = userRepo.getUser(email, password);
        return user;
    }

    public String checkUser(String email) {
        try {
            String status = userRepo.checkUser(email);
            return status;
        } catch(UserExistsException e) {
            throw e;
        }
    }

    public User registerUser(User newUser) {
        newUser.setUserID(UUID.randomUUID().toString());
        Optional<User> returnedUser = userRepo.registerUser(newUser);
        return returnedUser.orElse(null);
    }

}
