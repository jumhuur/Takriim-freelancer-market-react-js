const express = require("express")
const router = express.Router()
const {sinup, Login, getoneuser} = require('../cont/users')
// create new 
router.post('/', sinup)


// log in 
router.post('/log', Login)

router.get('/:id', getoneuser)

module.exports = router