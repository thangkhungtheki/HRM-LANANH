const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const path = require('path')

require('dotenv').config()
const app = express();

const routerapp = require('./router/router')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerapp)

module.exports = app;