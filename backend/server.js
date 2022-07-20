const express = require('express');
const mongose = require('mongoose');
const multer = require('multer')
const Jobroutes = require("./routes/jobs")
const qaybroutes = require("./routes/qayboroutes")
const orderroute = require("./routes/Orders")
const commentRoute = require("./routes/Comments")
const usersroute = require("./routes/users")
const cookieParser  = require('cookie-parser');
require("dotenv").config()




const Port = 4000 
const Mongo_Url =('mongodb+srv://jumhuur:jum0404@cluster0.uctjw.mongodb.net/my-data?retryWrites=true&w=majority')
const app = express()
app.use(cookieParser())


// middalware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path)
    console.log(req.method)
    next()
})


//routes
app.use('/jobs',Jobroutes)

app.use('/qaybo',qaybroutes)

app.use('/orders',orderroute)

app.use("/Comments", commentRoute)

app.use('/users', usersroute)



mongose.connect(Mongo_Url)
.then(()=>{
    // list
    app.listen( Port,() =>{
        console.log(`waa sax wax walba gal http://localhost:${Port}`)
    })
})
.catch((Error) =>{
    console.log(Error)
})


