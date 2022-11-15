const { model, Schema} = require('mongoose');

const manufacterSchema = new Schema({
    name: String,
    cif: String,
    address: String
});

const Manufacter = model('Manufacter', manufacterSchema);

module.exports = Manufacter;