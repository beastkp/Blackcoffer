const express = require('express');

const Router = express.Router();
const {insertData}  = require('../retreive');

Router.route('/insert').get(insertData);
// Router.route('/dashboard1').get();

module.exports = Router;