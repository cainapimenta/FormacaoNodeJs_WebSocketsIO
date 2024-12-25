import { insertLinkDocumento } from "./index.js";

const socket = io();

function emitirAdicionarDocumento(nome) {
	socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
	insertLinkDocumento(nome);
});

socket.emit("obter_documentos", (documentos) => {
	documentos.forEach((documento) => {
		insertLinkDocumento(documento.nome);
	});
});

export { emitirAdicionarDocumento };