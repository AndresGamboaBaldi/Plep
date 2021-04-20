const express = require('express')
const router = express.Router()
const PersonCtrl = require('../controllers/users.controller')

router.get('/users', PersonCtrl.getList)
router.post('/users', PersonCtrl.saveUser)
//router.put('/user', PersonCtrl.modifyUser)
//router.delete('/user', PersonCtrl.deletePerson)
/*router.get('/user', function(req,res) {
    console.log('hellow world')
    res.send('hello there')
})
*/
module.exports = router