package com.trungnguyen.mellow.authentication.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    private String displayName;
    private String avatarUrl;
    private String description;
}
