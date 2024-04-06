package com.trungnguyen.mellow.user.entity;

import com.trungnguyen.mellow.user.entity.type.DisplayMode;
import com.trungnguyen.mellow.shared.converter.StringArrayConverter;
import com.trungnguyen.mellow.user.entity.type.Role;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "user")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class User implements UserDetails {

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = " password")
    private String password;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 32, columnDefinition = "varchar(32) default 'USER'")
    private Role role;

    @Enumerated(EnumType.STRING)
    @Column(name = "display_mode")
    private DisplayMode displayMode;

    @Column(name = "is_active")
    private boolean isActive;

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_boards")
    private String[] watchUpdateBoards;

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_columns")
    private String[] watchUpdateColumns;

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_cards")
    private String[] watchUpdateCards;

//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Set<Membership> memberships = new HashSet<>();
//
//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Set<UserBoardInfo> userBoardInfos = new HashSet<>();

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        User other = (User) obj;
        if (email == null) {
            return other.email == null;
        }
        return email.equals(other.email);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
