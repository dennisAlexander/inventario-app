const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const { Schema } = mongoose;

let partSchema = new mongoose.Schema ({
    name: String,                           
    quantity: Number,
    producer: String      //boolean? 


});

//functions



const part = mongoose.model('part', partSchema);

part.save(() => {});

part.add(() => {});

part.modify(() => {});

part.delete(() => {});