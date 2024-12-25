import { insertLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
	documentos.forEach((documento) => {
		insertLinkDocumento(documento.nome);
	});
});