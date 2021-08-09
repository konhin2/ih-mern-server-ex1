// 1. Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 2. Schema
const RockBandsSchema = new Schema({
    name: String,
    price: Number,
    imageURL: String,
},{
    timestamps: true
})

// 3. Modelo
const RockBands = mongoose.model('bands', RockBandsSchema)

// 4. Exportación
module.exports = RockBands