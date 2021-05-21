const express = require('express');
const userController = require('./controllers/userController');
const giftController = require('./controllers/giftController');
const bidController = require('./controllers/bidController');
const bidSpecificController = require('./controllers/bidSpecificController');
const giftProfileController = require('./controllers/giftProfileController');
const sessions = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessions.create);

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.get('/gift', giftController.index);
routes.post('/gift', giftController.create);
routes.delete('/gift/:id', giftController.delete);

routes.get('/bid', bidController.index);
routes.post('/bid', bidController.create);
routes.delete('/bid', bidController.delete);

routes.get('/historicBidsPerGift/:idGift', bidSpecificController.historicBidsPerGift);

routes.put('/leiloar/:id', giftProfileController.leiloar);
routes.put('/arrematar/:idGift', giftProfileController.arrematar);

module.exports = routes;