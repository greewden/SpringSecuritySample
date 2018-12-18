package com.acme.resource;

import org.springframework.web.bind.annotation.*;

@RestController
public class ResourceController {

  @GetMapping("/resource")
  public Message home() {
    return new Message("Hello Denver");
 }
}
