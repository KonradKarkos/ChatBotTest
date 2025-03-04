import { Component } from "@angular/core";
import { ChatBotService } from "../chatbot.service";
import { MessageDto, ReactionType } from "../chatbot.models";

@Component({
    selector: 'app-chatbot-chat',
    templateUrl: 'chatbot-chat.component.html',
    styleUrls: ['chatbot-chat.component.scss'],
})
export class ChatBotChatComponent {

    constructor(private readonly chatBotService: ChatBotService){}
    public senderName!: string;
    public messages: MessageDto[] = [];
    public newMessage: string = "";
    public speakerId: string | undefined;

    public onGetChatClick(): void {
        this.chatBotService.getChat(this.senderName)
        .subscribe(result => {
            this.messages = result.messages;
            this.speakerId = result.speakerId;
        },
        (error) => {
            console.error(error);
          });
    }

    public onSendMessage(): void {
        const messageToAdd = {
            id: null,
            content: this.newMessage,
            reaction: ReactionType.None,
            speakerId: this.speakerId,
            timestamp: new Date(Date.now()),
        } as MessageDto;
        this.chatBotService.addMessage(messageToAdd).subscribe(result => {
            this.messages.push(messageToAdd);
            this.messages.push(result);
        });
    }
}