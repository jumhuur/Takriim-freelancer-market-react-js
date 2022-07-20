const { request, response } = require('express');
const express = require('express');
const router = express.Router()
// const multer = require("multer")


// diyaarinta multer 

// const strorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log(file)
//         cb(null, './uploades')
        
//       },

//       filename: function (req, file, cb) {
//         cb(null, file.originalname + '-' + Date.now())
//       }
// })

// const uploadfile = multer({storage:strorage }).single('image')
//     uploadfile(request, response, (err) => {
//         if(err){
//             return response.json({msg:'qalad'})
//         } else {
//             return response.json({msg:"Waa lagu upload garayey"})
//         }
//     })

const {
    Creatjob,
    GetAlljobs,
    GetJob,
    delete_job,
    update_job,
    GetAlljobsHome
} = require('../cont/jobcontrall');


// get all jobs 
router.get('/', GetAlljobs)



// get all jobs 
router.get('/Home', GetAlljobsHome)

// get one jobs 
router.get('/:id', GetJob)


// post job 
router.post("/", Creatjob)

// delete job 
router.delete("/:id", delete_job)

// update job 
router.put("/update/:id", update_job)

module.exports = router

