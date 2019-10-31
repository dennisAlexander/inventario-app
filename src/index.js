//express file   server-file    allows us to start the server
// allows to  code with a higher level of quality

const express = require('express');
const morgan = require('morgan');
const app = express(); 
// codigo del servidor  below

//settings             take this port from the  OS or default
app.set('port', process.env.PORT || 3000)   // defining the value **

// middlewares           para entender formatos de intercambio, de datos
app.use(morgan('dev'));   //gives a message in terminal from morgan
app.use(express.json());    // when data passes the server, check for json, and send json data

// routes                     urls the server uses, tareas , connects with task.routes

app.use('/api/tasks', require('./routes/task.routes'));

// Static files                to tell express where the statfiles are


//Starting the server
                                             // obtaining the value **
app.listen(app.get('port'), () => {          // reveceive app.set
    console.log(`server on port ${app.get('port')}`);
});