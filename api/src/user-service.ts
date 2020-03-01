import {User} from "./app";

const memory = [];

export async function saveUser(user: User) {
    console.log('saveUser', user);
    memory.push(user);

}

export class UserService {
    private static myUsers: User[];

    static saveUser(user: User) {
        console.log('saveUser', user);
        this.myUsers.push(user);
    }

}