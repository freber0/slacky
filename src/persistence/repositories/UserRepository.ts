import { IRepository } from "../IRepository"
import { User } from "../../models/User"

export class UserRepository implements IRepository<User> {
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.")
    }

    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.")
    }

    create(item: User): Promise<User> {
        throw new Error("Method not implemented.")
    }

    update(id: string, item: User): Promise<User | null> {
        throw new Error("Method not implemented.")
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}