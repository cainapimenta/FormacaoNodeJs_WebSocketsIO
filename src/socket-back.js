import io from './server.js';

const documentos = [
	{
		nome: "JavaScript",
		texto: "Texto padrão JavaScript"
	},
	{
		nome: "Node",
		texto: "Texto padrão Node"
	},
	{
		nome: "Socket.io",
		texto: "Texto padrão Socket.io"
	}
]

io.on("connection", (socket) => {
	console.log(`Um cliente se conectou!!! ID: ${socket.id}`);

	socket.on("selecionar_documento", ({ nomeDocumento }) => {
		const documento = getDocumento(nomeDocumento);

		console.log("Documento", documento);

		socket.join(nomeDocumento);
	});

	socket.on("keyUp_editorTexto", ({ texto, nomeDocumento }) => {
		socket.to(nomeDocumento).emit("keyUp_editorTexto_client", texto);
	});
});

function getDocumento(nome) {
	const documento = documentos.find((documento) => {
		return documento.nome === nome;
	});

	return documento;
}