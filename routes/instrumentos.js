// 1. IMPORTACIONES
const express = require ('express')
const router = express.Router ()

const instrumentoController = require ('../controllers/instrumentoController')
// 2. RUTEO
// Obtencion de todos los instrumentos
router.get('/', instrumentoController.obtenerInstrumentos)

// Crear un nuvo instrumento
router.post('/crear', instrumentoController.crearInstrumento)

// Editar un instrumento
router.post('/actualizar', instrumentoController.editarInstrumento)

// Eliminar un instrumento
router.post('/eliminar', instrumentoController.eliminarInstrumento)

// 3. EXPORTACIÓN
module.exports = router
