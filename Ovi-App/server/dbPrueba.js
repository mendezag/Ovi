const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DbPrueba = new mongoose.Schema({
    "id": "String",
    "nombre" : "String",
    "apellido" : "String",
})

mongoose.model('dbPrueba',DbPrueba)