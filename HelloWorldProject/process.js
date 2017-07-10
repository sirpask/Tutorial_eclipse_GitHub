console.log('id del proceso: ', process.pid);
console.log('título del proceso: ', process.title);
console.log('versión de node: ', process.version);
console.log('sistema operativo: ', process.platform);
process.on('exit', function(codigo) {
	console.log('saliendo del proceso con código de salida', codigo);
	})