import { documentosCollection } from './dbConnector.js';

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

export { getDocumento, updateDocumento };