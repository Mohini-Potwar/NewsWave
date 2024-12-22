package com.example.Final.News.API.backend.Login;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Final.News.API.backend.Registration.User;

import java.util.Optional;

public interface UserRepository_Login extends JpaRepository<User, Long> {
    Optional<User> findByEmailAndPassword(String email, String password);
}
