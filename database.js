const mongoose = require('mongoose')
const URI = ('mongodb+srv://admin:admin123@plep.k6kbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))

module.exports = mongoose