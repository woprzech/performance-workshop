import {Document, Model} from 'mongoose';
import {User} from "./app";
import * as mongoose from 'mongoose';

interface MongoUser {
    name: string;
    phoneNumber: string;
    surname: string;
    age: number;
}

export class UserRepository {

    model: Model<Document & MongoUser>;

    constructor() {

        try {
            this.model = mongoose.model('users');
        } catch (e) {
            const schema = new mongoose.Schema({
                    name: {type: String},
                    phoneNumber: {type: String},
                    surname: {type: String},
                    age: {type: Number},
                }
            );
            this.model = mongoose.model('users', schema);
        }
    }

    save(user: User) {
        return new this.model(user).save();
    }
}
