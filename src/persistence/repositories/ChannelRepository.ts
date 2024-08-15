import { Channel } from "../../models/Channel";
import { IRepository } from "../IRepository";

export class ChannelRepository implements IRepository<Channel> {
    findAll(): Promise<Channel[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Channel | null> {
        throw new Error("Method not implemented.");
    }
    create(item: Channel): Promise<Channel> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Channel): Promise<Channel | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}