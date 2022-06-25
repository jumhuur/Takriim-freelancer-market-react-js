const mongoose = require('mongoose');
const schema = mongoose.Schema;
const jobs = new schema ({
    title : {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    },
    iibsade: {
        type: String,
        required: true
    },
    Qiimayn: {
        type: String,
        required: true
    },
    Qiimaha: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    Qaybid: {
        type: String,
        required: true
    },
    Mudada: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
    },
    Xadiga: { 
        type: String,
        required: true
    },
    Nooca: { 
        type: String,
        required: true
    },
    xaalad: { 
        type: Number,
        required: true
    },
    qodob1aad: { 
        type: String,
        required: true
    },
    qodob2aad: { 
        type: String,
        required: true
    },
}, {timestamps: true})
module.exports = mongoose.model('Job', jobs)