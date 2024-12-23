const socket = io();

const editor_texto = document.getElementById("editor-texto");

editor_texto.addEventListener("keyup", () => {
	socket.emit("keyup_editorTexto", editor_texto.value);
});