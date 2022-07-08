const usersmodel = require("../models/users")
const bcrypt = require('bcrypt');


// sinup user 
const sinup = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body

    const saltRounds = 10;
    const myPlaintextPassword = password;

    const salt = bcrypt.genSaltSync(saltRounds);
    const Hashed = bcrypt.hashSync(myPlaintextPassword, salt);
    try {
        const password = Hashed
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
