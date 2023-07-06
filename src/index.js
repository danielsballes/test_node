import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
    try {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

main();