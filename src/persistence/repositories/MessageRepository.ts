import { Message } from "../../models/Message";
import { IRepository } from "../IRepository";

export class MessageRepository implements IRepository<Message> {
    findAll(): Promise<Message[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Message | null> {
        throw new Error("Method not implemented.");
    }
    create(item: Message): Promise<Message> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Message): Promise<Message | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}