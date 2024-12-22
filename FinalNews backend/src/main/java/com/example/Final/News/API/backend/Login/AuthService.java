package com.example.Final.News.API.backend.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Final.News.API.backend.Registration.User;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository_Login userRepository;

    public boolean authenticateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmailAndPassword(email, password);
        return user.isPresent();
    }
}

