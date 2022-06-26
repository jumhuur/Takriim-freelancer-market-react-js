const express = require('express')
const router = express.Router()
const {
    neworder,
    GetOrders,
    getorder
} = require('../cont/orders')



// get all orders 

router.get('/', GetOrders)

// new order

router.post('/', neworder)

// get a sigal order 
router.get("/:id",getorder )






module.exports = router