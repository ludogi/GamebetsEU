'use strict';

var express = require('express');
var router = express.Router();
var LoginController = require('./login.controller');

module.exports = function(app) {
  app.get('/api/bets', LoginController.bets);
};
