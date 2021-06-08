require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const giftController = require('./controllers/giftController');
const bidController = require('./controllers/bidController');
const bidSpecificController = require('./controllers/bidSpecificController');
const giftProfileController = require('./controllers/giftProfileController');
const sessions = require('./controllers/sessionController');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');



routes.post('/sessions', sessions.create);

routes.get('/user', userController.index);
routes.post('/user', userController.create);
routes.get('/userInfo/:id', userController.userInfo);

routes.get('/gift', giftController.index);
routes.post('/gift', multer(multerConfig).single('file'), giftController.create);
routes.delete('/gift/:id', giftController.delete);
routes.put('/editarPrenda/:id', multer(multerConfig).single('file'), giftProfileController.editarPrenda);

routes.get('/bid', bidController.index);
routes.post('/bid', bidController.create);
routes.delete('/bid', bidController.delete);

routes.get('/historicBidsPerGift/:idGift', bidSpecificController.historicBidsPerGift);
routes.get('/maxBid/:idGift', bidSpecificController.maxBid);
routes.put('/leiloar/:id', giftProfileController.leiloar);
routes.get('/salegift', giftProfileController.salegift);
routes.get('/salegiftadm', giftProfileController.salegiftadm);
routes.put('/arrematar/:idGift', giftProfileController.arrematar);

module.exports = routes;