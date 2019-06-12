const mongoose = require('../database/db');
const Schema = mongoose.Schema;

const Planeta = new Schema ({
        nome: { type: String, required: true },
        clima: { type: String, required: true },
        terreno: { type: String, required: true }
});

module.exports = mongoose.model('Planeta', Planeta)




/*import mongoose from "../database/db";

const schema = {
    nome: { type: String, required: true },
    clima: { type: String, required: true },
    terreno: { type: String, required: true }
};

const collectionName = "Planeta";
const noteSchema = mongoose.Schema(schema);
const Planeta = mongoose.model(collectionName, noteSchema);

export default Planeta;
*/