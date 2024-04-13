package com.trungnguyen.mellow.authentication.controller;

import com.trungnguyen.mellow.authentication.dto.AuthenticationRequest;
import com.trungnguyen.mellow.authentication.dto.AuthenticationResponse;
import com.trungnguyen.mellow.authentication.dto.RefreshTokenRequest;
import com.trungnguyen.mellow.authentication.dto.RegisterRequest;
import com.trungnguyen.mellow.authentication.service.AuthenticationService;
import com.trungnguyen.mellow.shared.exception.UnauthorizedException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> resister(
            @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.login(request));
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<AuthenticationResponse> refreshToken(
            HttpServletRequest request,
            @RequestBody RefreshTokenRequest refreshTokenRequest
    ) throws UnauthorizedException {
        return ResponseEntity.ok(service.refreshToken(request, refreshTokenRequest));
    }

}
