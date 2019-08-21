const express = require('express');

const app = express();

app.use('/v1/colaborators', require('./colaborators'));

app.use('/v1/characters', require('./characters'));

module.exports = app;