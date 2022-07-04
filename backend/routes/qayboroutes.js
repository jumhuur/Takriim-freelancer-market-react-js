const express = require('express');
const router = express.Router()
const {
    getallqayb,
    getqayb_kaliya,
    addqayb,
    getpapular

} = require("../cont/qayb")

// get papular 
router.get("/gaar/api", getpapular ) 


// get all qayb 
router.get("/", getallqayb)

// get sigal qayb 
router.get("/:id", getqayb_kaliya)


// add qayb 

router.post("/" , addqayb)



// // delete qayb 
// router.delete("/:id" , deleteqayb)

// // upadate qayb 
// router.patch("/:id", upadateqayb)

module.exports = router