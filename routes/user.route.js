const express = require('express')
const router = express.Router()

const UserCtrl = require('../controllers/user.controller')

router.get('/user/:userId', UserCtrl.getUserById)
router.get('/user/', UserCtrl.getUsers)
router.post('/users', PersonCtrl.saveUser)

module.exports = router