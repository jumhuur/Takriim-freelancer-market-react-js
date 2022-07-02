const express = require("express")
const router = express.Router()
const sinup = require('../cont/users')
// create new 
router.post('/', sinup)

module.exports = router