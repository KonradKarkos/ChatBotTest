import { Component, Input } from "@angular/core";
import { MessageDto } from "../chatbot.models";

@Component({
    selector: 'app-chatbot-message',
    templateUrl: 'chatbot-message.component.html',
    styleUrls: ['chatbot-message.component.scss'],
})
export class ChatBotMessageComponent {
    @Input() messageToDisplay: MessageDto | undefined;
}