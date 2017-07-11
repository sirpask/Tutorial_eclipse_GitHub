// Dependencies
//var ClientCtrl = require('./controllers/clients.js');

var path = require("path");

var ClientCtrl = require(path.resolve('./controllers/clients.js'));

// Opens App Routes
module.exports = function(express,app) {

// HOME
app.get('/', function(req, res, next) {
 res.sendfile('./public/index.html');
});

//API
var api = express.Router();

 //Clients
// api.route('/clients') 
// .get(ClientCtrl.findAll)
// .post(ClientCtrl.add);
app.get('/clients', ClientCtrl.findAll);
 
 app.post('/clients',ClientCtrl.add); 

 
 
 //api.route('/clients/:id') 
 //.get(ClientCtrl.findById)
 //.put(ClientCtrl.update)
 //.delete(ClientCtrl.delete);
 app.get('/clients/:id',ClientCtrl.findById); 
 app.put('/clients/:id',ClientCtrl.update); 
 app.delete('/clients/:id',ClientCtrl.delete);
 
 
 
 app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // Carga única de la vista
 });
};