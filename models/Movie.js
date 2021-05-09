const mongoose = require('mongoose')
const {Schema} = mongoose
const movieSchema = new Schema({
    title : {type : String, require:"true"},
    date: {type : Date, require:"true"},
    country: {type : String, require:"true"},
    genre: {type : String, require:"true"},
    img:{ type : String, require:"true"},
    url:{type : String, require:"true"}
})
module.exports = mongoose.model('movies', movieSchema)