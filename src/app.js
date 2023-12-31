import express from 'express';
import 'dotenv/config';
import router from './routes/project.routes.js';
import cors from 'cors';

class App {
    constructor() {
        this.expressApp = express();
        //middleware
        this.expressApp.use(cors());
        this.expressApp.use(express.json());

        this.expressApp.use(router);
    }
}

export default App;