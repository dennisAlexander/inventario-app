const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

// Database & Models                           *** REPLACE THIS 
require('./database/mongoClient.js');
const Product = require('./models/Articulo');
const Ticket = require('./models/Ticket');

// Home
app.get('/', (req, res) => {
    res.status(200).send({"message":"it's alive!!!"});
});