import {User} from "./app";
import {UserRepository} from "./user-repository";

const memory = [];

export async function saveUser(user: User) {
    console.log('saveUser', user);
    memory.push(user);

}

export class UserService {
    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    saveUser(user: User) {
        return this.repository.save(user);
    }

}