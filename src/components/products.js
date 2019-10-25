const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const { Schema } = mongoose;

let productSchema = new mongoose.Schema ({
    name: String,                           
    quantity: Number,
     //boolean? 


});

//functions



const product = mongoose.model('product', productSchema);

product.save(() => {});

product.add(() => {});

product.modify(() => {});

product.delete(() => {});