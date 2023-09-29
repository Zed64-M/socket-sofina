import cors from "cors";
import Server from "./class/server";
import router from "./routes/router";
import bodyParser from "body-parser";

const server = new Server();

//BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json);

//CORS
server.app.use(cors({origin: true, credentials: true}))

server.app.use('/', router);
server.start(() => {
    console.log(`Servidor está corriendo en el puerto ${server.port}`)
})
