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

UserCtrl.saveUser = async (req, res) =>{
    console.log ( req.body)
    const userName= req.body.userName
    const password  = req.body.password
    const email  = req.body.email
    const gender  = req.body.gender
    const birthdate  = req.body.birthdate
    const country  = req.body.country
    const img  = req.body.img
    const UserObj = new User ({userName, password, email, gender, birthdate, country, img})
    await UserObj.save()
    res.json({"response":"ok"})
}

module.exports = UserCtrl

/*
{
    "userName":"Drosazza",
    "password":"Pass123",
    "email":"diegorosazza@gmail.com",
    "gender":"male",
    "birthdate": "1999-08-14T13:34:00.000",
    "country": "Bolivia",
    "img": "algunaFoto.jpg"
}
*/