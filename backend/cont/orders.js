const ordermodel = require("../models/orders")
const mongoose = require("mongoose")

// get orders

const GetOrders = async (req, res) =>{
    const getdata = await ordermodel.find({}).sort({createdAt : -1})
    res.status(200).json(getdata)
}


// a new order 

const neworder = async (req, res) =>{
    const {
        title,
        Loobahanyahay,
        Qiimaha,
        image,
        Jobid,
        UserId,
        Dalbade_id,
        Xadiga,
        Nooca,
        qodob1aad,
        qodob2aad,
        xaalad,
        gudoomay
    } = req.body
    try{
        const data = await ordermodel.create({
            title,
            Loobahanyahay,
            Qiimaha,
            image,
            Jobid,
            UserId,
            Dalbade_id,
            Xadiga,
            Nooca,
            qodob1aad,
            qodob2aad,
            xaalad,
            gudoomay
        })
        res.status(200).json(data)
    }catch (error){
        console.log({error: error.massage})
    }
}




// get a sigal order 

const getorder = async (req, res) =>{
    const {id} = req.params
    const order = await ordermodel.findById(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Qalad: "lama helin shaqo"})
    }

    if(!order){
        res.status(400).json({qalad: "lama hellin qayb"})
    }
    res.status(200).json(order)
}

module.exports = {
    GetOrders,
    neworder,
    getorder
}