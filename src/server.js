import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import { connect, documentosCollection } from "./dbConnector.js";

const app = express();
const PORT = process.env.PORT || 3000;

const atualPath = url.fileURLToPath(import.meta.url);
const directoryPublic = path.join(atualPath, "../..", "public");

app.use(express.static(directoryPublic));

const serverHttp = http.createServer(app);

serverHttp.listen(PORT, async () => {
	await connect();

	console.log(`Servidor escutando na porta ${PORT}`);
});

const io = new Server(serverHttp);

export default io;