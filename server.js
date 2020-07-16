const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// API file for interacting with MySQL
const api = require('./server/routes/api');

const port = process.env.PORT || '3000';

const app = express();
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'setu_db'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// Parsers
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Enable the cors options
var corsOptions = {
    allRoutes: true,
    Origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

// API location
app.use('/api', api);

app.set('trust proxy', 1);

app.listen(port, function(){
    console.log("Server running on port "+port);
});