const express = require('express')
const router = express.Router()
const MovieCtrl = require('../controllers/movie.controller')

router.get('/movies', MovieCtrl.getAll)

module.exports = router