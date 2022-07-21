const mongoose = require("mongoose")
const schema = mongoose.Schema

const users = new schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },

}, {timestamps: true})


module.exports = mongoose.model('users', users)