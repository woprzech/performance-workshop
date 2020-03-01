import {Logger} from "./Logger";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {saveUser, UserService} from "./user-service";

const app = express();
app.use(bodyParser.json());
const router = express.Router();

interface UserData {
    name: string,
    surname: string,
    age: number
    data: any
}

export class User {
    private name: string;
    private surname: string;
    private age: number;
    private data: any;

    constructor(body: UserData) {
        this.name = body.name;
        this.surname = body.surname;
        this.age = body.age;
        this.data = body.data;
    }

}

router.post('/person', async (req, res) => {
    Logger.info('post /person', req.body);

    await saveUser(new User(req.body));

    res.sendStatus(200);
});

router.post('/service-person', async (req, res) => {
    Logger.info('post /person', req.body);

    await UserService.saveUser(new User(req.body));

    res.sendStatus(200);
});

app.use('/api', router);

export default app;
