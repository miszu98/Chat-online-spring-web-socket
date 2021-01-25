package com.chatapplication.webchat.Controller;

import com.chatapplication.webchat.Models.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {


    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public ChatMessage get(ChatMessage chatMessage) {
        return new ChatMessage(chatMessage.getText(), chatMessage.getUser());
    }
}
