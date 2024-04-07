package com.trungnguyen.mellow.authentication.entity;

import com.trungnguyen.mellow.authentication.entity.type.TokenType;
import com.trungnguyen.mellow.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "refresh_token")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "refresh_token")
    private String refreshToken;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private TokenType type = TokenType.BEARER;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "email")
    public User user;
}
