const express = require('express');
const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);



module.exports = routes;

//  metodos http
//  GET: buscar
//  POST: criar
//  PuT: alterar
//  delete: deletando

//rota/recurso == '/'& ()=>{}


//tipos de parametros
// ( Query params = paramentros nomeados enviados na rota após *?* (filtros, paginação),
// Route params paramemtros = parms usados para identificar recursos,
// Request Body = Corpo da requisição )

//SQL & noSQL

//Driver: SELECT * FROM users
//Query Builder: table('users').select('*').where()