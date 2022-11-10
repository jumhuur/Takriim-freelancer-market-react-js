const express = require("express")
const router = express.Router()
const { 
    NewComment,
    GetComments
} =  require("../cont/Comments")


// get all commetnts

router.get('/', GetComments)

// create comment 

router.post('/', NewComment)



module.exports = router