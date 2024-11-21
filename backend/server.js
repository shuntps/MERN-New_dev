//server.js
import express from "express";

import startServer from "./config/startServer.js";

import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(routes);

startServer(app);
