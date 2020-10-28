const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const collection = "users"; //referencia a la coleccion de la BD

const schema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, lowercase: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
}, { timestamps: true });

const model = mongoose.model(collection, schema);

module.exports = model;