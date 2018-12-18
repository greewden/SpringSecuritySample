package com.acme.basic;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // @formatter:off
    http
      .httpBasic()
        .and()
      .logout()
        .and()
      .authorizeRequests()
        .antMatchers("/index.html", "/", "/home", "/login", "/*.js", "/*.ico").permitAll()
      .anyRequest().authenticated()
        .and()
      .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    // @formatter:on
  }
}

