import "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");

function insertLinkDocumento(nome) {
	console.log(listaDocumentos);

	listaDocumentos.innerHTML += `
		<a href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
			${nome}
      	</a>
	`;
}

export { insertLinkDocumento }