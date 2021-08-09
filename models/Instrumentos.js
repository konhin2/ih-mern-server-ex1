// 1. IMPORTACIONES
const mogoose = require('mongoose')
// 2. SCHEMA
const instrumentosSchema = mogoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)
// 3. Modelo
const Instrumento = mogoose.model('instrumentos', instrumentosSchema)

// 4. Exportar el modelo
module.exports = Instrumento