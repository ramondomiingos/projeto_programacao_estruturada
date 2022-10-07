/** 
 * Métodos HTTP:
 * 
 * GET:     Busca uma informação no back-end
 * POST:    Cria uma informação no back-end
 * PUT:     Altera uma informação no back-end
 * DELETE:  Deleta uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (filtros e paginação)
 * Route params: Parâmetros utilizados  para identificar recursos 
 * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
 * Sobre o banco 
 * Driver: SELECT * FROM users
 * Query Builder: table ('users').select('*').where()
 */

const express = require  ('express');
const routes = require ('./routes'); 
const cors = require ('cors'); 


const app = express ();

app.use (cors ()); 
app.use (express.json ());
app.use(routes);

app.listen(3333);  // // //