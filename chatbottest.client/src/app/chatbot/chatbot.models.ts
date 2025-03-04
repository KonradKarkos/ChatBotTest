export interface Chat {
    speakerId: string;
    messages: MessageDto[];
}

export interface MessageDto {
    id: string | null;
    content: string;
    reaction: ReactionType;
    speakerId: string;
    timestamp: Date;
}

export enum ReactionType {
    None = 0,
    Like = 1,
    Dislike = 2,
}