// 1. IMPORTACIONES
const mogoose = require('mongoose')
// 2. SCHEMA
const proyectoSchema = mogoose.Schema({
    nombre: {
        type: String,
        required: true
    } 
},
    {
        timestamps: true
    }
)
// 3. Modelo
const Proyecto = mogoose.model('proyectos', proyectoSchema)

// 4. Exportar el modelo
module.exports = Proyecto