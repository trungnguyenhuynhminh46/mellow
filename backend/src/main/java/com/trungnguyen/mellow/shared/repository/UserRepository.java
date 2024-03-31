package com.trungnguyen.mellow.shared.repository;

import com.trungnguyen.mellow.shared.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
