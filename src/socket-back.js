import io from './server.js';
import { documentosCollection } from './dbConnector.js';

io.on("connection", (socket) => {
	console.log(`Um cliente se conectou!!! ID: ${socket.id}`);

	socket.on("selecionar_documento", async ({ nomeDocumento }, devolverTexto) => {
		socket.join(nomeDocumento);

		const documento = await getDocumento(nomeDocumento);

		if (documento) {
			devolverTexto(documento.texto);
		}
	});

	socket.on("keyUp_editorTexto", ({ texto, nomeDocumento }) => {
		const documento = getDocumento(nomeDocumento);

		if (documento) {
			documento.texto = texto;
			socket.to(nomeDocumento).emit("keyUp_editorTexto_client", texto);
		}
	});
});

function getDocumento(nome) {
	const documento = documentosCollection.findOne({
		nome: nome
	});

	return documento;
}