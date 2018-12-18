package com.acme.resource;

import java.util.UUID;

public class Message {

    private String id = UUID.randomUUID().toString();
    private String content;

    public Message() {
        this.content = "Hello World!";
    }

    public Message(String content) {
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
