const usersmodel = require("../models/users")
// sinup user 
const sinup = async (req, res) => {
    const {
        name,
        email,
        password

    } = req.body

    try {
        const users = await usersmodel.create({
            name,
            email,
            password
        })

        res.status(200).json(users)
    
    
    } catch (error){
        res.status(400).json({error: "qalad"})
    }
}


module.exports = sinup
