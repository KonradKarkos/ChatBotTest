import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Chat, MessageDto } from "./chatbot.models";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ChatBotService {

    private readonly apiAddress = "https://localhost:7233";
    constructor(private readonly httpClient: HttpClient){}

    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8'
        })
    }

    public getChat(speakerName: string): Observable<Chat> {
        return this.httpClient.get<Chat>(`${this.apiAddress}/api/chat/${speakerName}`);
    }

    public addMessage(message: MessageDto): Observable<MessageDto> {
        return this.httpClient.post<MessageDto>(`${this.apiAddress}/api/chat`, message, {headers: this.httpOptions.headers});
    }
}