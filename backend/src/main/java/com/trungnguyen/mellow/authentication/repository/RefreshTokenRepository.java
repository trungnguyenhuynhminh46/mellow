package com.trungnguyen.mellow.authentication.repository;

import com.trungnguyen.mellow.authentication.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long>{
    Optional<RefreshToken> findByRefreshToken(String refreshToken);

    @Modifying
    @Query("delete from RefreshToken rt where rt.user.email = ?1")
    void deleteByUserEmail(String email);

    @Modifying
    @Query("delete from RefreshToken rt where rt.refreshToken = ?1")
    void deleteByRefreshToken(String refreshToken);
}
