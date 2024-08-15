export interface Message {
    id?: string;
    content: string;
    createdAt?: string;
    userId: number;
    channelId: number;
}