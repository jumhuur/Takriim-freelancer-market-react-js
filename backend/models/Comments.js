const mongoose = require('mongoose')
const schema = mongoose.Schema

const Comments = new schema ({
    Rate: {
        type: String,
        require: true
    },
    Comment: {
        type: String,
        require: true
    },
    Jobid: {
        type: String,
        require: true
    },
    Username : {
        type: String,
        require: true
    },
    Userid: {
        type: String,
        require: true
    },

}, {timestamps: true})


module.exports = mongoose.model('Comments', Comments)