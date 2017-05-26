'use strict';

var express = require('express');
var router = express.Router();
var betsController = require('./bets_room.controller');

module.exports = function(app) {
  app.get('/api/games', betsController.getGame);
};
