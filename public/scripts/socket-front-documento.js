import { updateValueEditor } from "./documento.js";

const socket = io();

socket.on("keyUp_editorTexto_client", (texto) => {
	updateValueEditor(texto);
});

function emitEvent(eventName, dados, callback) {
	socket.emit(eventName, dados, callback);
}

export { emitEvent }