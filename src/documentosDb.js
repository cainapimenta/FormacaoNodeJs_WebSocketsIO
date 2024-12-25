import { documentosCollection } from './dbConnector.js';

function addDocumento(nome) {
	const resultado = documentosCollection.insertOne({
		nome: nome,
		texto: ""
	});

	return resultado;
}

function getDocumentos() {
	const documentos = documentosCollection.find().toArray();
	return documentos;
}

function getDocumento(nome) {
	const documento = documentosCollection.findOne({
		nome: nome
	});

	return documento;
}

function updateDocumento(nome, texto) {
	const infoUpdate = documentosCollection.updateOne({
		nome: nome
	}, {
		$set: {
			texto: texto
		}
	});

	return infoUpdate;
}

function deleteDocumento(nome) {
	const resultado = documentosCollection.deleteOne({
		nome: nome
	});

	return resultado;
}

export { getDocumentos, getDocumento, updateDocumento, addDocumento, deleteDocumento };