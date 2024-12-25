import { documentosCollection } from './dbConnector.js';

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

export { getDocumentos, getDocumento, updateDocumento };