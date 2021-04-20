const UserCtrl = {}
const User = require('../models/User')


UserCtrl.getList = async (req,res) => {
    const Users = await User.find()
    console.log('getList User')
    res.json(Users)

}

UserCtrl.saveUser = async (req, res) =>{
    const name = 'Node'
    const lastName = 'JS'
    const PersonObj = new Person ({name, lastName})
    await PersonObj.save()
    res.json({"response":"ok"})
}
/*
PersonCtrl.modifyUser = async (req, res) =>{
    await Person.updateOne({"name":"Pepe","lastname":"Perez","date":"2021-04-04"})
    res.json({"response":"ok"})
}

PersonCtrl.deletePerson = async (req, res) =>{
    await Person.remove({"name":"Node"})
    res.json({"response":"OK"})
}
*/



module.exports = UserCtrl