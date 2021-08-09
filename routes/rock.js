// 1. Importaciones
const express = require('express')
const router = express.Router()

const rockController = require('./../controllers/rockController')

// 2. Rutas
router.get('/', rockController.getRocks)

// 3. Exportación
module.exports = router