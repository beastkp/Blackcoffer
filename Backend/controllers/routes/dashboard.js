const express = require("express");
const { analysis } = require("../controllers/retreival");

const Router = express.Router();


Router.route('/analytics').get(analysis);
Router.route('/e-commerce').get(analysis);

module.exports = Router;