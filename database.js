const mongoose = require('mongoose')
const URI = ('mongodb://localhost/plep')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))

module.exports = mongoose