'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var animalSchema = require('../models/animais')
var endereco = require('../models/endereco')

var pessoaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    Sexo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: Buffer,
        required: false  
    },
    data_nascimento:{
        type: Date,
        required: true
    },
    logradouro:[{
        endereco:[endereco.schema]
    }],
    telefone_fixo:{
        type: String,
        required: false
    },
    telefone_celular:{
        type: String,
        required: true
    },
    animal:[{
        animal:[animalSchema.schema]
    }]
})



pessoaSchema.plugin(mongooseUniqueValidator);


module.exports = mongoose.model('pessoaSchema', pessoaSchema);