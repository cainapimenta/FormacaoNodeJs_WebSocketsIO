import io from './server.js';

io.on("connection", (socket) => {
	console.log(`Um cliente se conectou!!! ID: ${socket.id}`);

	socket.on("selecionar_documento", (nomeDocumento) => {
		socket.join(nomeDocumento);
	});

	socket.on("keyUp_editorTexto", (texto) => {
		//socket.broadcast.emit("keyUp_editorTexto_client", texto);

		socket.to("JavaScript").emit("keyUp_editorTexto_client", texto);
	});
});