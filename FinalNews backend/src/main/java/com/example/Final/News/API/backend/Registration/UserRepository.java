package com.example.Final.News.API.backend.Registration;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Additional custom queries can be added here
}