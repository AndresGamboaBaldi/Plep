const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    userName : {type : String, require:"true"},
    password : {type : String, require:"true"},
    email : {type : String, require:"true"},
    gender: {type : String, require:"true"},
    birthdate: {type : Date, require:"true"},
    country: {type : String, require:"true"},
    img:{ data: Buffer, contentType: String}
})
module.exports = mongoose.model('users', userSchema)