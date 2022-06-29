const express = require('express');
const router = express.Router()
const {
    Creatjob,
    GetAlljobs,
    GetJob,
    delete_job
} = require('../cont/jobcontrall')


// get all jobs 
router.get('/', GetAlljobs)

// get one jobs 
router.get('/:id', GetJob)


// post job 
router.post("/", Creatjob)

// delete job 
router.delete("/:id", delete_job)

// update job 
router.patch("/:id", (req, res) =>{
    res.json({msg: "update job"})
})

module.exports = router

