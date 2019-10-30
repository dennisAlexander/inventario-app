'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
                                  // this shit is connecting the shema to mongo atlas

//schema goes here


  // mySchema

const PartsSchema = new Schema ({
    name: String, required: true,
    quantity: Number, required: true,
    price: {Number, 
        min: [50, 'Price Too low'],
        max: [200, 'Price Too high']
    },
    company: String
    // ID, name, inventory level, price, max and min values, and company name or machine ID
})

module.exports = mongoose.model(‘Part’, PartsSchema);


