const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    // Query-Route-Body
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })

}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.index);

routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:Joi.number().required(),
    })
}), incidentController.delete);



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