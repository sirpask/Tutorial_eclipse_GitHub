//var Persona = require("./public/stylesheets/modelo/persona.js");

var path = require("path");

var Persona = require(path.resolve("./public/stylesheets/modelo/persona.js"));

//var Controller = require ("./public/stylesheets/controller.js");

var path2 = require("path");

var Controller = require(path2.resolve('./public/stylesheets/controller.js'));

module.exports = function(app) {
	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./public/js/vendor/angular/index.html'); // Carga única de la vista
	});
};