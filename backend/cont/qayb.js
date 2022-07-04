const qaybmodels = require('../models/Qaybomodels');
const mongoose = require('mongoose');


// get all qayb 

const getallqayb = async (req, res) => {
    const data = await qaybmodels.find({}).sort({createdAt: -1}).limit(8)
    res.status(200).json(data)
} 


const getqayb_kaliya = async (req, res) =>{
    const {id} = req.params
    const data = await qaybmodels.findById(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Qalad: "lama helin shaqo"})
    }

    if(!data){
        res.status(400).json({qalad: "lama hellin qayb"})
    }
    res.status(200).json(data)
} 

const addqayb = async (req, res) =>{
    const {Name , Title , image} = req.body

    try {
        const data = await qaybmodels.create({Name , Title , image})
        res.status(200).json(data)
    } catch (error) {
        console.log({error: error.massage})
    }
}


// get qayb gaar 
const getpapular = async (req, res) => {
    const papular = await qaybmodels.find({}).limit(3)
    res.status(200).json(papular)
    //res.status(200).json({"msg": "fariin"})
}




module.exports = {
    getallqayb,
    getqayb_kaliya,
    addqayb,
    getpapular
}