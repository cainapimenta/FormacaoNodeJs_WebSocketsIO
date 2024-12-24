import { updateValueEditor } from "./documento.js";

const socket = io();

socket.on("keyUp_editorTexto_client", (texto) => {
	updateValueEditor(texto);
});

function emitEvent(eventName, dados) {
	socket.emit(eventName, dados);
}

export { emitEvent }