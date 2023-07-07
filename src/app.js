import express from 'express';
import 'dotenv/config';
import router from './routes/project.routes.js';

class App {
    constructor() {
        this.expressApp = express();
        //middleware
        this.expressApp.use(express.json());

        this.expressApp.use(router);
    }
}

export default App;