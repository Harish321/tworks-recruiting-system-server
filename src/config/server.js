import express from "express";
import fileUpload from "express-fileupload";
import setRoutes from "./routes";
import cors from  "cors";


const server = express();
server.use(fileUpload());
server.use(cors());
server.use(express.json());


setRoutes(server);
export default server;