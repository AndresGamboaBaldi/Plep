const express = require('express')
const router = express.Router()
const PersonCtrl = require('../controllers/user.controller')

router.get('/user', PersonCtrl.getList)
router.put('/user', PersonCtrl.saveUser)
router.post('/user', PersonCtrl.modifyUser)
//router.delete('/user', PersonCtrl.deletePerson)
/*router.get('/user', function(req,res) {
    console.log('hellow world')
    res.send('hello there')
})
*/
module.exports = router