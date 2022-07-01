const jobsmodel = require('../models/jobsmodel');
const mongoose = require('mongoose');

// dhamaan shaqoyinka
const GetAlljobs = async (req, res) =>{
    const shaqooyin = await jobsmodel.find({jobsmodel: -6}).sort({createdAt: -1})
    res.status(200).json(shaqooyin)
}


// galin shaqo 
const Creatjob = async (req, res) => {
    const {title,
        body,
        iibsade,
        Qiimayn,
        Qiimaha,
        image,
        Qaybid,
        Mudada,
        UserId,
        Xadiga,
        Nooca,
        xaalad,
        qodob1aad,
        qodob2aad
     } = req.body
     try{
        const jobs = await jobsmodel.create( {title,
            body,
            iibsade,
            Qiimayn,
            Qiimaha,
            image,
            Qaybid,
            Mudada,
            UserId,
            Xadiga,
            Nooca,
            xaalad,
            qodob1aad,
            qodob2aad
         })
         res.status(200).json(jobs)
     } catch (error) {
        res.status(400).json({error: error.massage})
    }

    console.log(req.file)

}


// shaqo kaliya 
const GetJob = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Qalad: "lama helin shaqo"})
    }
    const shaqo_kaliya = await jobsmodel.findById(id)
    if(!shaqo_kaliya){
        return res.status(404).json({qalad: "lama hellin shaqadan"})
    }

    res.status(200).json(shaqo_kaliya)
}

// delete shaqo
const delete_job = async (req , res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Qalad: "lama helin shaqo"})
    }

    const delete_shaqo = await jobsmodel.findByIdAndDelete({_id: id})
    if(!delete_job){
        res.status.json({error: "qalad ayaa jira"})

    }

    res.status(200).json(delete_shaqo)

}

// upadate shaqo 

module.exports  = {
    Creatjob,
    GetAlljobs,
    GetJob,
    delete_job
}