// 1. IMPORTACIONES
const express = require ('express')
const connectDB = require('./config/db')
const app = express()

// 2. MIDDLEWARES
// Variables de entorno
require('dotenv').config()

// 3.RUTEO

// 4.SERVIDOR
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + process.env.PORT)
})