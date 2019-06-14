const mongoose = require('../database/db');
const Schema = mongoose.Schema;

const Planeta = new Schema ({
        nome: { type: String, required: true },
        clima: { type: String, required: true },
        terreno: { type: String, required: true }
});

module.exports = mongoose.model('Planeta', Planeta)
