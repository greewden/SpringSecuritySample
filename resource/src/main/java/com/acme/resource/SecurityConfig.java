package com.acme.resource;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // @formatter:off
    http
      .httpBasic().disable()
      .authorizeRequests().anyRequest().authenticated()
        .and()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER);
    // @formatter:on
  }
}

