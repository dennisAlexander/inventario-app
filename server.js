//api supposedly   ,, probably stays in app.js and crud ops go beneath it

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});



//alternative :app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// alternative for mongo client  

const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://aleks:<password>@cluster0-ff5nu.mongodb.net/test?retryWrites=true&w=majority";   //y que era mi password?? 

mongoose.connect(DB_URI, { useNewUrlParser: true })
        .then( () => console.log("-Succesful connection to database-"))
        .catch( err => console.log(err) );