import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

let corsOptions = {
    origin: "http://localhost:3001"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));