package com.github.driftlog.splitwise.model;



import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    public User(String name, String email, String password) {
        this.userID = UUID.randomUUID().toString();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    private String userID;

    private String name;

    @Email
    private String email;

    private String password;
    
    
    
}
