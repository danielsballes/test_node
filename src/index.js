import App from "./app.js";
import { sequelize } from "./database/database.js";

class Main {
    start = async () => {
        const app = new App();

        const alter = (process.env.ENV !== 'prod') ? true : false;

        try {
            await sequelize.sync({alter: false});
            app.expressApp.listen(3000, () => {
                console.log("Server is running on port 3000");
            });
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
    }
}

const main = new Main();

main.start();