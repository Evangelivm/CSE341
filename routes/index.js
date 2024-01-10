const routes = require('express').Router();
const lesson1Controller = require('../controllers/index');

routes.get('/', lesson1Controller.indexRoute);
//routes.get('/emily', lesson1Controller.emilyRoute);
//routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;