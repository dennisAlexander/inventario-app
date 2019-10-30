'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




  // mySchema

const ProductsSchema = new Schema ({
    name: String, required: true,
    quantity: Number, required: true,
    price: {Number 
      min: [50, 'Price Too low'],
      max: [200, 'Price Too high']
  },
  company: String
    //producer,  ID, name, inventory level, price, and max and min values
});

module.exports = mongoose.model(‘Product', ProductsSchema);