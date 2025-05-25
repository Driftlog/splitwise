package com.github.driftlog.splitwise.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.driftlog.splitwise.exception.UserExistsException;
import com.github.driftlog.splitwise.model.User;
import com.github.driftlog.splitwise.service.LoginService;

import jakarta.json.Json;
import jakarta.json.JsonObject;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path="/")
public class LoginController {

    @Autowired
    LoginService loginService;
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
       Optional<User> retrievedUser = loginService.getUser(user.getEmail(), user.getPassword());

       if (!retrievedUser.isPresent()) {
            return ResponseEntity.status(404)
                                .body("User not found!");
                        
       } 

       return ResponseEntity.status(200)
                .body(retrievedUser.get().toString());
    }

    @PostMapping("/registration")
    public ResponseEntity<String> register(@RequestBody User newUser) throws UserExistsException {

        String isRegistered = loginService.checkUser(newUser.getEmail());
        if (isRegistered != null) return ResponseEntity.status(HttpStatusCode.valueOf(400)).body("Email has already been registered");
        loginService.registerUser(newUser);        
        Optional<User> createdUser = loginService.getUser(newUser.getEmail(), newUser.getPassword());
        if (createdUser == null) {
            return ResponseEntity.status(HttpStatusCode.valueOf(400))
                    .body("Error processing the request");
        }

        System.out.println(createdUser.get());

        JsonObject userJsonString = Json.createObjectBuilder()
                                .add("email", createdUser.get().getEmail())
                                .add("name", createdUser.get().getName())
                                .add("password", createdUser.get().getPassword())
                                .add("userID", createdUser.get().getUserID())
                                .build();

                    

        return ResponseEntity.ok(userJsonString.toString());
        // return ResponseEntity.ok().body()
    }

}
