const mongoose = require('mongoose');
const schema = mongoose.Schema
const qaybo = new schema({
    Name : {
        type : String,
        require: true
    },
    Title : {
        type : String,
        require: true
    },
    image : {
        type : String,
        require: true
    },
}, {timestamps : true})


module.exports = mongoose.model('Qayb', qaybo)