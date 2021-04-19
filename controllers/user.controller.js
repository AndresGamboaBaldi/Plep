const UserCtrl = {}
const User = require('../models/User')

UserCtrl.getUserById= async (req, res) => {
    const getUser = await User.findById(req.params.userId)
    res.send(getUser)
}


module.exports = UserCtrl