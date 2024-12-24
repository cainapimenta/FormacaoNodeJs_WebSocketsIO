import { emitEvent } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const editor_texto = document.getElementById("editor-texto");
const titulo_documento = document.getElementById("titulo-documento");

titulo_documento.textContent = nomeDocumento || "Documento sem titulo";

emitEvent("selecionar_documento", nomeDocumento);

editor_texto.addEventListener("keyup", () => {
	emitEvent("keyUp_editorTexto", editor_texto.value);
});

function updateValueEditor(texto) {
	editor_texto.value = texto;
}

export { updateValueEditor };
