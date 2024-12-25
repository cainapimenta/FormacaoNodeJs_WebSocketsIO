import { addDocumento, getDocumento, getDocumentos, updateDocumento } from './documentosDb.js';
import io from './server.js';

io.on("connection", (socket) => {
	socket.on("adicionar_documento", async (nome) => {
		const documentoExiste = (await getDocumento(nome)) !== null;

		if (documentoExiste) {
			socket.emit("documento_existente", nome);
		} else {
			const resultado = await addDocumento(nome);

			if (resultado.acknowledged) {
				io.emit("adicionar_documento_interface", nome);
			}
		}
	});

	socket.on("obter_documentos", async (devolverDocumentos) => {
		const documentos = await getDocumentos();

		devolverDocumentos(documentos);
	});

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