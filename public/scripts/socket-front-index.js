import { insertLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

function emitirAdicionarDocumento(nome) {
	socket.emit("adicionar_documento", nome);
}

socket.on("documento_existente", (nome) => {
	alert(`Documento ${nome} já cadastrado!`);
});

socket.on("adicionar_documento_interface", (nome) => {
	insertLinkDocumento(nome);
});

socket.emit("obter_documentos", (documentos) => {
	documentos.forEach((documento) => {
		insertLinkDocumento(documento.nome);
	});
});

socket.on("documento_excluido_sucesso", (nome) => {
	removerLinkDocumento(nome);
});

export { emitirAdicionarDocumento };