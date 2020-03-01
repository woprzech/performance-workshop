import app from './app';
import {Logger} from './Logger';

const port = process.env.PORT || 3000;
app.listen(port, () => {
    Logger.debug(`Application started, listening on ${port}`);
});
