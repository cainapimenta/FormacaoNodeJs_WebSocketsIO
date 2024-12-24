import { getDocumento, updateDocumento } from './documentosDb.js';
import io from './server.js';

io.on("connection", (socket) => {
	console.log(`Um cliente se conectou!!! ID: ${socket.id}`);

	socket.on("selecionar_documento", async ({ nomeDocumento }, devolverTexto) => {
		socket.join(nomeDocumento);

		const documento = await getDocumento(nomeDocumento);

		if (documento) {
			devolverTexto(documento.texto);
		}
	});

	socket.on("keyUp_editorTexto", async ({ texto, nomeDocumento }) => {
		const infoUpdate = await updateDocumento(nomeDocumento, texto);

		if (infoUpdate.modifiedCount) {
			socket.to(nomeDocumento).emit("keyUp_editorTexto_client", texto);
		}
	});
});