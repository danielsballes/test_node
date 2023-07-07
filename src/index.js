import App from "./app.js";
import { sequelize } from "./database/database.js";

class Main {
    start = async () => {
        const app = new App();

        await sequelize.sync({alter: (process.env.ENV !== 'prod') ? true : false });
        app.expressApp.listen(3000);
    }
}

const main = new Main();

main.start();