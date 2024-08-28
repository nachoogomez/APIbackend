import app from "./app.js";
import { sequelize } from "./database/database.js";
//import "./models/user.js";

async function main() {
    try {
        await sequelize.sync();
        //await sequelize.authenticate();
        console.log("Conexion exitosa");

        const PORT = 3000;
        app.listen(PORT, () =>{
            console.log(`Corriendo en puerto: ${PORT}`);
        })
    } catch (error) {
        
    }
}

main();


