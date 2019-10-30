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
const Product = require('./src/models/products');
const Part = require('./src/models/parts');

//possible replacement

require('./')
// Home
app.get('/', (req, res) => {
    res.status(200).send({"message":"it's alive!!!"});
});


// 1) Definir el endpoint para crear un artículo
app.post('/api/products/', (req, res) => {                 // descubre como hacer un endpoint ... con mongo atlas??
    // 2) Obtener el body que me manda el cliente en la petición
    const newItem = req.body;

    // 3) Crear el documento en la base de datos
    new Product(newItem)
        .save()
        .then( item => { // 4.1) Respondo al cliente con respuesta de BD exitosa
            res.status(201).send({
                message: "item created succesfully",
                item,
            });
        })
        .catch( err => {
            res.status(400).send({ // 4.2) Respondo al cliente con respuesta de BD fallida
                message: "there was an errror creating the item",
                err,
            })
        });
});