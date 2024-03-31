package com.trungnguyen.mellow.authentication.service;

import com.trungnguyen.mellow.authentication.controller.AuthenticationRequest;
import com.trungnguyen.mellow.authentication.controller.AuthenticationResponse;
import com.trungnguyen.mellow.authentication.controller.RegisterRequest;
import com.trungnguyen.mellow.shared.entity.type.Role;
import com.trungnguyen.mellow.shared.repository.UserRepository;
import com.trungnguyen.mellow.shared.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .displayName(request.getDisplayName())
                .avatarUrl(request.getAvatarUrl())
                .description(request.getDescription())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
