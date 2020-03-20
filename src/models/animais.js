'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animaisSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    raca:{
        type:String,
        required: true
    },
    sexo:{
        type: String,
        required: true
    },
    porte:{
        type: String,
        required: true
    },
    vacina:[{
        tipo: {
            type:String,
            required: true
        }
    }],
    deficiencia:{
        type: Boolean,
        required: true
    },
    doenca:[{
        tipos:{
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('animaisSchema',animaisSchema);