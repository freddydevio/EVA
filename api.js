const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://eva:passw0rd@ds139890.mlab.com:39890/eva')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));

const LoginApi = require('./src/routes/api/Login');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(LoginApi);

app.listen(5555, function () {
    console.log('api started listening on port 5555!');
});