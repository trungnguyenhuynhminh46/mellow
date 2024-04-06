package com.trungnguyen.mellow.shared.auditing;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.trungnguyen.mellow.user.entity.User;
import org.springframework.security.core.context.SecurityContext;

import java.util.Optional;

public class ApplicationAuditAware implements AuditorAware<User> {
    @Override
    public Optional<User> getCurrentAuditor() {

        return Optional.ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .filter(Authentication::isAuthenticated)
                .map(Authentication::getPrincipal)
                .map(User.class::cast);
    }
}
