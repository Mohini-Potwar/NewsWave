package com.example.Final.News.API.backend.Registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        // Additional checks or encryption can be added here
        userRepository.save(user);
    }
}

