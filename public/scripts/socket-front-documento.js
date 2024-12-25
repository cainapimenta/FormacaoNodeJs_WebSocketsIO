import { alertarERedirecionar, updateValueEditor } from "./documento.js";

const socket = io();

socket.on("keyUp_editorTexto_client", (texto) => {
	updateValueEditor(texto);
});

socket.on("documento_excluido_sucesso", (nome) => {
	alertarERedirecionar(nome);
});

function emitEvent(eventName, dados, callback) {
	socket.emit(eventName, dados, callback);
}

export { emitEvent }