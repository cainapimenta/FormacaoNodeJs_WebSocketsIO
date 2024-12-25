import { MongoClient } from "mongodb";

const mongoClient = new MongoClient("mongodb+srv://admin:B1admin%40@dbwebsocketsio.imdc5.mongodb.net/?retryWrites=true&w=majority&appName=DBWebSocketsIO");

let documentosCollection;

async function connect() {
	try {
		await mongoClient.connect();

		const db = mongoClient.db("websockets");
		documentosCollection = db.collection("documentos");

		console.log("Banco de dados conectado com sucesso!");
	} catch (error) {
		console.log(error);
	}
}

export { connect, documentosCollection };