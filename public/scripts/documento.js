import { emitEvent } from "./socket-front-documento.js";

const editor_texto = document.getElementById("editor-texto");

editor_texto.addEventListener("keyup", () => {
	emitEvent("keyUp_editorTexto", editor_texto.value);
});

function updateValueEditor(texto) {
	editor_texto.value = texto;
}

export { updateValueEditor };
