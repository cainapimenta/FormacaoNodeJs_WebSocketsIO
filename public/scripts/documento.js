import { emitEvent } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const editor_texto = document.getElementById("editor-texto");
const titulo_documento = document.getElementById("titulo-documento");
const excluirDocumento = document.getElementById("excluir-documento");

titulo_documento.textContent = nomeDocumento || "Documento sem titulo";

emitEvent("selecionar_documento", {
	texto: "",
	nomeDocumento,
}, (texto) => {
	updateValueEditor(texto);
});

editor_texto.addEventListener("keyup", () => {
	emitEvent("keyUp_editorTexto", {
		texto: editor_texto.value,
		nomeDocumento
	});
});

excluirDocumento.addEventListener("click", () => {
	emitEvent("excluir_documento", nomeDocumento);
});

function updateValueEditor(texto) {
	editor_texto.value = texto;
}

function alertarERedirecionar(nome) {
	if (nome === nomeDocumento) {
		alert(`Documento ${nome} excluido com sucesso!`);
		window.location.href = "/";
	}
}

export { updateValueEditor, alertarERedirecionar };
