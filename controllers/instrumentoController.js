const Instrumento = require('./../models/Instrumentos')

exports.obtenerInstrumentos= async (req, res) => {
    try {
        const instrumentos = await Instrumento.find({})
        res.json(instrumentos)
    }
    catch (e) {

    }
}
exports.crearInstrumento = async (req, res) => {
    const { nombre, precio } = req.body
    try {
        const response = await Instrumento.create({ nombre, precio })
        res.json(response)
    }
    catch (e) {
        console.log(e)
    }
}
exports.editarInstrumento = async (req, res) => {

    const { _id, nombre, precio } = req.body
    try {
        const response = await Instrumento.findByIdAndUpdate(_id, {nombre, precio}, {new: true})
        res.json(response)
    } catch (error) {
        
    }
}

exports.eliminarInstrumento = async (req, res) => {
    const { _id } = req.body
    try{
        const response = await Instrumento.findOneAndRemove({_id})
        res.json(response)
    }
    catch(error){

    }
}