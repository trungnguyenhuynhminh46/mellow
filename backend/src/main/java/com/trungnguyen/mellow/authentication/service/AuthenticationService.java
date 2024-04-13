package com.trungnguyen.mellow.authentication.service;

import com.trungnguyen.mellow.authentication.dto.AuthenticationRequest;
import com.trungnguyen.mellow.authentication.dto.AuthenticationResponse;
import com.trungnguyen.mellow.authentication.dto.RefreshTokenRequest;
import com.trungnguyen.mellow.authentication.dto.RegisterRequest;
import com.trungnguyen.mellow.authentication.entity.RefreshToken;
import com.trungnguyen.mellow.authentication.entity.type.TokenType;
import com.trungnguyen.mellow.authentication.repository.RefreshTokenRepository;
import com.trungnguyen.mellow.shared.exception.ForbiddenException;
import com.trungnguyen.mellow.shared.exception.UnauthorizedException;
import com.trungnguyen.mellow.user.entity.type.DisplayMode;
import com.trungnguyen.mellow.user.entity.type.Role;
import com.trungnguyen.mellow.user.repository.UserRepository;
import com.trungnguyen.mellow.user.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    private void revokeAllRefreshTokensOfUser(String email) {
        refreshTokenRepository.deleteByUserEmail(email);
    }

    private void revokeRefreshToken(String refreshToken) {
        refreshTokenRepository.deleteByRefreshToken(refreshToken);
    }

    public AuthenticationResponse register(RegisterRequest request) {
        final String email = request.getEmail();
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new ForbiddenException("Email is already taken");
        }
        User user = User.builder()
                .email(email)
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
        final String email = request.getEmail();
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        request.getPassword()
                )
        );
        List<RefreshToken> storedRefreshTokens = refreshTokenRepository.findByUserEmail(email);

        int numberOfLoggedAccounts = storedRefreshTokens.size();
        if (numberOfLoggedAccounts >= 5) {
            throw new ForbiddenException("You can only login on 5 devices at the same time. Please logout on other devices to continue.");
        }
        var user = userRepository.findByEmail(email).orElseThrow();
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    private String validateToken(String token, String tokenName) {
        final String userEmail = jwtService.extractUsername(token);

        if (userEmail == null) {
            throw new UnauthorizedException(String.format("Invalid %s: Jwt token has no subject", tokenName));
        }

        Optional<User> user = userRepository.findByEmail(userEmail);
        if (user.isEmpty()) {
            throw new UnauthorizedException(String.format("Invalid %s: No user with specific email is found", tokenName));
        }

        if (!jwtService.isTokenValid(token, user.get())) {
            throw new UnauthorizedException(String.format("Invalid %s: %s is expired", tokenName, tokenName));
        }

        return userEmail;
    }

    private void validateTokens(String accessToken, String refreshToken) {
        String accessTokenEmail = validateToken(accessToken, "access token");
        String refreshTokenEmail = validateToken(refreshToken, "refresh token");
        if (!accessTokenEmail.equals(refreshTokenEmail)) {
            throw new UnauthorizedException("Invalid tokens: Access token and refresh token do not belong to the same user");
        }
    }

    private User detectReuseRefreshToken(String refreshToken) {
        Optional<RefreshToken> storedRefreshToken = refreshTokenRepository.findByRefreshToken(refreshToken);
        if (storedRefreshToken.isEmpty()) {
            String email = jwtService.extractUsername(refreshToken);
            revokeAllRefreshTokensOfUser(email);
            throw new ForbiddenException("Reuse refresh token detected.");
        }
        revokeRefreshToken(refreshToken);
        return storedRefreshToken.get().getUser();
    }

    private Map<String, String> rotateRefreshToken(String refreshToken) {
        User user = detectReuseRefreshToken(refreshToken);
        String newRefreshToken = jwtService.generateRefreshToken(user);
        String newAccessToken = jwtService.generateAccessToken(user);
        saveRefreshToken(newRefreshToken, user);

        return Map.of(
                "accessToken", newAccessToken,
                "refreshToken", newRefreshToken
        );
    }

    public AuthenticationResponse refreshToken(
            HttpServletRequest request,
            @RequestBody RefreshTokenRequest refreshTokenRequest
    ) throws UnauthorizedException {
        final String authHeader = request.getHeader("Authorization");
        final String accessToken;
        final String refreshToken;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new UnauthorizedException("Invalid access token");
        }
        accessToken = authHeader.substring(7);
        refreshToken = refreshTokenRequest.getRefreshToken();
        validateTokens(accessToken, refreshToken);
        Map<String, String> newTokens = rotateRefreshToken(refreshToken);
        return AuthenticationResponse.builder()
                .accessToken(newTokens.get("accessToken"))
                .refreshToken(newTokens.get("refreshToken"))
                .build();
    }
}
