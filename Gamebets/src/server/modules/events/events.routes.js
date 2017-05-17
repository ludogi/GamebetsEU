'use strict';

var express = require('express');
var router = express.Router();
var eventsController = require('./events.controller');

module.exports = function(app) {
  app.get('/api/events', eventsController.getEvents);
};
