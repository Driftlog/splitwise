package com.github.driftlog.splitwise.repo;

public class Queries {

    public static final String insertUserByID = "INSERT INTO USERS VALUES(?, ?, ?, ?)";
    public static final String getUserByLogin = "SELECT * from USERS where email = ? AND password = ?";
    public static final String getUserByEmail = "SELECT * from USERS where email = ?";
}
