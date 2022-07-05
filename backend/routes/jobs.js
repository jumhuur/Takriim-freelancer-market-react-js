const express = require('express');
const router = express.Router()
//const multer = require("multer")
// const filestorage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, "images")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + ".." + file.originalname )
//     }
// })
// const upload =  multer({storage: filestorage}) 
const {
    Creatjob,
    GetAlljobs,
    GetJob,
    delete_job,
    update_job
} = require('../cont/jobcontrall');


// get all jobs 
router.get('/', GetAlljobs)

// get one jobs 
router.get('/:id', GetJob)


// post job 
router.post("/", Creatjob)

// delete job 
router.delete("/:id", delete_job)

// update job 
router.patch("/:id", update_job)

module.exports = router

