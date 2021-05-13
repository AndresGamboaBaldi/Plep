const MovieCtrl = {}
const Movie = require('../models/Movie')

MovieCtrl.getAll = async (req, res) => {
    const movies = await Movie.find()
    console.log(movies) 
    res.json(movies)
}

module.exports = MovieCtrl