// PATRÓN DE DISEÑO - PROGRAMACIÓN FUNCIONAL

// IMPORTACIONES
const mongoose = require('mongoose')

require('dotenv').config()

// MIDDLEWARE
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log('Base de datos conectada')
    } catch (err) {
        console.log(err)
        process.exit(1) // Detiene la app por completo
    }
}

// EXPORTACIÓN
module.exports = connectDB