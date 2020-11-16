// Express Setup
require('dotenv').config()
const express = require("express");
const app = express();
app.use(express.json());

// Documentation Setup
const swagger = require('swagger-ui-express')
const documentation = require('./src/documentation.json')
app.use('/documentation', swagger.serve, swagger.setup(documentation))

// Router Setup
const router = require('./src/router')
app.use('/api/v1', router);

module.exports = app;