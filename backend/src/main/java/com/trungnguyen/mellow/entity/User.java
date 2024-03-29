package com.trungnguyen.mellow.entity;

import com.trungnguyen.mellow.entity.converter.StringArrayConverter;
import com.trungnguyen.mellow.entity.type.DisplayMode;
import com.trungnguyen.mellow.entity.type.Role;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = " password")
    private String password;

    @Column(name = "username")
    private String username;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 32, columnDefinition = "varchar(32) default 'USER'")
    private Role role;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "display_mode", length = 32, columnDefinition = "varchar(32) default 'SYSTEM'")
    private DisplayMode displayMode;

    @Column(name = "is_active", columnDefinition = "boolean default true")
    private boolean isActive;

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_boards", length = 1024, columnDefinition = "varchar(1024) default ''")
    private String[] watchUpdateBoards = new String[]{};

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_columns", length = 1024, columnDefinition = "varchar(1024) default ''")
    private String[] watchUpdateColumns = new String[]{};;

    @Convert(converter = StringArrayConverter.class)
    @Column(name = "watch_update_cards", length = 1024, columnDefinition = "varchar(1024) default ''")
    private String[] watchUpdateCards = new String[]{};;

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

    public User() {
    }

    public User(Long id, String username, String displayName, String password, String email, String avatarUrl, Role role, String description, DisplayMode displayMode, boolean isActive, String[] watchUpdateBoards, String[] watchUpdateColumns, String[] watchUpdateCards, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.username = username;
        this.displayName = displayName;
        this.password = password;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.role = role;
        this.description = description;
        this.displayMode = displayMode;
        this.isActive = isActive;
        this.watchUpdateBoards = watchUpdateBoards;
        this.watchUpdateColumns = watchUpdateColumns;
        this.watchUpdateCards = watchUpdateCards;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public DisplayMode getDisplayMode() {
        return displayMode;
    }

    public void setDisplayMode(DisplayMode displayMode) {
        this.displayMode = displayMode;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String[] getWatchUpdateBoards() {
        return watchUpdateBoards;
    }

    public void setWatchUpdateBoards(String[] watchUpdateBoards) {
        this.watchUpdateBoards = watchUpdateBoards;
    }

    public String[] getWatchUpdateColumns() {
        return watchUpdateColumns;
    }

    public void setWatchUpdateColumns(String[] watchUpdateColumns) {
        this.watchUpdateColumns = watchUpdateColumns;
    }

    public String[] getWatchUpdateCards() {
        return watchUpdateCards;
    }

    public void setWatchUpdateCards(String[] watchUpdateCards) {
        this.watchUpdateCards = watchUpdateCards;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", displayName='" + displayName + '\'' +
                ", role=" + role +
                '}';
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((username == null) ? 0 : username.hashCode());
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
        if (username == null) {
            return other.username == null;
        }
        return username.equals(other.username);
    }
}
