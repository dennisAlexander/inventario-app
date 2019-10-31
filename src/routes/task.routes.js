// define URL CRUD operations
const express = require('express');
const router = express.Router();   // method returns object in which routes can be injected

// donde se define el REST API, donde va EL CRUD, donde todo se hace
router.get('/', (req,res) => {    // when a request happens at root endpoint res console.log
    res.json({
        status: 'API Works!'
    });
})