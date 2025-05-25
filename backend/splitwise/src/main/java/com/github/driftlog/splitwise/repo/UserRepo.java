package com.github.driftlog.splitwise.repo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.github.driftlog.splitwise.exception.UserExistsException;
import com.github.driftlog.splitwise.model.User;

@Repository
public class UserRepo extends Queries{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Optional<User> getUser(String email, String password) {
       try  { 
            User returnedUser = jdbcTemplate.queryForObject(Queries.getUserByLogin, 
                                                            (rs,row) -> {
                                                                User user = new User();
                                                                user.setUserID(rs.getString("user_id"));
                                                                user.setEmail(rs.getString("email"));
                                                                user.setPassword(rs.getString("password"));
                                                                user.setName(rs.getString("name"));
                                                                return user;
                                                            }, 
                                                            email, 
                                                            password);
            System.out.println(returnedUser);
            return Optional.ofNullable(returnedUser);
       } catch (EmptyResultDataAccessException e) {   
            return Optional.empty();
       }
    }

    public String checkUser(String email) throws UserExistsException {

        try {
            User returnedUser = jdbcTemplate.queryForObject
            (Queries.getUserByEmail,
            (rs,row) -> {
                User user = new User();
                user.setUserID(rs.getString("user_id"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                user.setName(rs.getString("name"));
                return user;
            }, 
             email);
            
            if (returnedUser != null) {
                throw new UserExistsException("User Exists", returnedUser.getEmail());
            }
            return null;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public Optional<User> registerUser(User newUser) {
        try {
            int Success = jdbcTemplate.update(Queries.insertUserByID, 
                                                newUser.getUserID(), 
                                                newUser.getName(), 
                                                newUser.getEmail(), 
                                                newUser.getPassword());
            return Success > 0 ? Optional.of(newUser) : Optional.empty();
        } catch (Exception e) {
            return Optional.empty();
        }
    }    
}
