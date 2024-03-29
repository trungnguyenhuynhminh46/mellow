package com.trungnguyen.mellow.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig {
    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {

        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

        jdbcUserDetailsManager.setUsersByUsernameQuery(
                "select username, password, is_active from user where username=?");

        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery(
                "select username, role from user where username=?");

        return jdbcUserDetailsManager;
    }

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http.authorizeHttpRequests(configurer ->
//                configurer
//                        .requestMatchers(HttpMethod.GET, "/api/boards").hasRole("EMPLOYEE")
//                        .requestMatchers(HttpMethod.GET, "/api/boards/**").hasRole("EMPLOYEE")
//                        .requestMatchers(HttpMethod.POST, "/api/boards").hasRole("MANAGER")
//                        .requestMatchers(HttpMethod.PUT, "/api/boards").hasRole("MANAGER")
//                        .requestMatchers(HttpMethod.DELETE, "/api/boards/**").hasRole("ADMIN")
//        );
//
//        http.httpBasic(Customizer.withDefaults());
//
//        http.csrf(AbstractHttpConfigurer::disable);
//
//        return http.build();
//    }
}
