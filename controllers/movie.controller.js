const MovieCtrl = {}
const movie = require('../models/Movie')

MovieCtrl.getAll = async (req, res) => {
    const movies = await movie.find()
    console.log(movies) 
    res.json(movies)
}

module.exports = MovieCtrl