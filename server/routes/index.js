'use strict';

const site = require('./site');
const oauth2 = require('./oauth2');
const user = require('./user');
const client = require('./client');

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

module.exports = {
  site,
  oauth2,
  user,
  client,
};
