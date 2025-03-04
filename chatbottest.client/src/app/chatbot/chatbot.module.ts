import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChatBotChatComponent } from './chatbot-chat/chatbot-chat.component';
import { ChatBotMessageComponent } from './chatbot-message/chatbot-message.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChatBotChatComponent,
    ChatBotMessageComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ChatBotChatComponent
  ],
  providers: [],
  bootstrap: []
})
export class ChatModule { }