'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enderecoSchema = new Schema({
    rua: {
        type: String,
        required: true
    },
    numero:{
        type: Number,
        required: true
    },
    complemento:{
        type: String,
        required: false
    },
    bairro:{
        type:String,
        required: true
    },
    cep:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('endereco', enderecoSchema);