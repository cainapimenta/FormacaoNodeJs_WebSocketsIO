import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const formAdicionaDocumento = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

formAdicionaDocumento.addEventListener("submit", (event) => {
	event.preventDefault();

	emitirAdicionarDocumento(inputDocumento.value);

	inputDocumento.value = "";
});

function insertLinkDocumento(nome) {
	listaDocumentos.innerHTML += `
		<a id="documento-${nome}" href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
			${nome}
      	</a>
	`;
}

function removerLinkDocumento(nome) {
	const linkDocumento = document.getElementById(`documento-${nome}`);

	listaDocumentos.removeChild(linkDocumento);
}

export { insertLinkDocumento, removerLinkDocumento }