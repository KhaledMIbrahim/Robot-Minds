package com.example.Robot_Minds.repository;

import com.example.Robot_Minds.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    default Optional<User> findByUsernameOrEmail(String usernameOrEmail) {
        return findByUsername(usernameOrEmail).or(() -> findByEmail(usernameOrEmail));
    }

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
