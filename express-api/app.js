const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const tempRouter = require('./routes/temp');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', tempRouter);

module.exports = app;
