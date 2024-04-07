package com.trungnguyen.mellow.authentication.service;

import com.trungnguyen.mellow.authentication.entity.RefreshToken;
import com.trungnguyen.mellow.authentication.repository.RefreshTokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LogoutHandlerImpl implements LogoutHandler {
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtService jwtService;

    @Transactional
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader("Authorization");
        final String refreshToken;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        Optional<RefreshToken> storedRefreshToken = refreshTokenRepository.findByRefreshToken(refreshToken);
        if (storedRefreshToken.isEmpty()) {
            System.out.println("Reuse refresh token detected.");
            try {
                String email = jwtService.extractUsername(refreshToken);
                refreshTokenRepository.deleteByUserEmail(email);
                response.sendError(HttpServletResponse.SC_FORBIDDEN, "Reuse refresh token detected.");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            return;
        }
        refreshTokenRepository.deleteByRefreshToken(refreshToken);
    }
}
