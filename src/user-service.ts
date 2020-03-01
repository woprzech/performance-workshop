import {User} from "./app";

const memory = [];

export async function saveUser(user: User) {
    console.log('saveUser', user);
    memory.push(user);

}

export class UserService {
    private static memory: User[];

    static saveUser(user: User) {
        console.log('saveUser', user);
        this.memory.push(user);
    }

}