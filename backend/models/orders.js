const mongoose = require('mongoose');
const schema = mongoose.Schema
const orders = new schema ({
    title: {
        type: String,
        require: true
    },
    Loobahanyahay: {
        type: String,
        require: true
    },
    Qiimaha: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    Jobid: {
        type: String,
        require: true
    },
    UserId: {
        type: String,
        require: true
    },
    Dalbade_id: {
        type: String,
        require: true
    },
    Xadiga: {
        type: String,
        require: true
    },
    Nooca: {
        type: String,
        require: true
    },
    qodob1aad: {
        type: String,
        require: true
    },
    qodob2aad: {
        type: String,
        require: true
    },

    xaalad: {
        type: Number,
        require: true,
        
    },

    gudoomay: {
        type: Boolean,
        require: true,
    },



},{timestamps: true})
module.exports = mongoose.model("order", orders)



