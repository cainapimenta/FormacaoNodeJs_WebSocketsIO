import { updateValueEditor } from "./documento.js";

const socket = io();

socket.on("keyUp_editorTexto_client", (texto) => {
	updateValueEditor(texto);
});

function emitEvent(eventName, texto) {
	socket.emit(eventName, texto);
}

export { emitEvent }