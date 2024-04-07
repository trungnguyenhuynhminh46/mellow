package com.trungnguyen.mellow.authentication.service;

import com.trungnguyen.mellow.authentication.dto.AuthenticationRequest;
import com.trungnguyen.mellow.authentication.dto.AuthenticationResponse;
import com.trungnguyen.mellow.authentication.dto.RegisterRequest;
import com.trungnguyen.mellow.authentication.entity.RefreshToken;
import com.trungnguyen.mellow.authentication.entity.type.TokenType;
import com.trungnguyen.mellow.authentication.repository.RefreshTokenRepository;
import com.trungnguyen.mellow.user.entity.type.DisplayMode;
import com.trungnguyen.mellow.user.entity.type.Role;
import com.trungnguyen.mellow.user.repository.UserRepository;
import com.trungnguyen.mellow.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private void saveRefreshToken(String refreshToken, User user) {
         var refreshTokenEntity = RefreshToken.builder()
                 .refreshToken(refreshToken)
                 .user(user)
                 .type(TokenType.BEARER)
                 .build();
         refreshTokenRepository.save(refreshTokenEntity);
    }
    private void revokeAllRefreshTokensOfUser(User user) {
        refreshTokenRepository.deleteByUserEmail(user.getEmail());
    }
    private void revokeRefreshToken(String refreshToken) {
        refreshTokenRepository.deleteByRefreshToken(refreshToken);
    }
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .displayName(request.getDisplayName())
                .avatarUrl(request.getAvatarUrl())
                .description(request.getDescription())
                .role(Role.USER)
                .isActive(true)
                .displayMode(DisplayMode.SYSTEM)
                .watchUpdateBoards(new String[]{})
                .watchUpdateColumns(new String[]{})
                .watchUpdateCards(new String[]{})
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        userRepository.save(user);
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
}
