const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    model: { type: mongoose.Schema.Types.String, required: true },
    capacity: { type: mongoose.Schema.Types.String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    isRented: {type: Boolean, required: true, default: false},
    creationDate: {type: Number, required:true}    
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;