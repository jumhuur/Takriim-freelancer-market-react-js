const express = require('express')
const router = express.Router()
const {
    neworder,
    GetOrders,
    getorder,
    update_Order_xaalad
} = require('../cont/orders')



// get all orders 

router.get('/', GetOrders)

// new order

router.post('/', neworder)

// get a sigal order 
router.get("/:id",getorder )

// update xaalad
router.put("/xaalad/:id",update_Order_xaalad )






module.exports = router