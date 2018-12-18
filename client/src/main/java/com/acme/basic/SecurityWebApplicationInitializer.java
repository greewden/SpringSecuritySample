package com.acme.basic;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

class SecurityWebApplicationInitializer
  extends AbstractSecurityWebApplicationInitializer {

  public SecurityWebApplicationInitializer() {
    super(SecurityConfig.class);
  }
}
