const UserCtrl = {}
const User = require('../models/User')

UserCtrl.getUserById= async (req, res) => {
    const getUser = await User.findById(req.params.userId)
    res.send(getUser)
}
UserCtrl.getUsers= async (req, res) => {
    const Users = await User.find()
    res.send(Users)
}

module.exports = UserCtrl