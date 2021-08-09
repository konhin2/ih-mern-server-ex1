const RockBands = require ('./../models/RockBands')
exports.getRocks = async (req, res) => {
    try {
        const bands = await RockBands.find({})
        res.json(bands)
    } catch (e) {
        console.log(e)
    }
}