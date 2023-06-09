const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    progresoArquitectura: {
        type: [Boolean],
        default: []
    },
    progresoCultura: {
        type: [Boolean],
        default: []
    },
    progresoArte: {
        type: [Boolean],
        default: []
    }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);