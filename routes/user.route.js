const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/user.controller')

router.get('/user/:userId', UserCtrl.getUserById)

module.exports = router