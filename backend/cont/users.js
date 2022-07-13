const usersmodel = require("../models/users")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// create tokon
const dhicid = 7 * 24 * 60 * 60
const createToken = (id) =>{
    return jwt.sign({id}, "Takriim Markte", {
        expiresIn: dhicid
    })

}



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

        const token =  createToken(users._id)
        console.log(token)
        res.cookie('Jwtoken',token, {httpOnly: true, maxAge: dhicid * 1000, signed: true}).send('Cookie-Parser');
        res.status(200).json({users:users._id})
        res.coo
    
    
    } catch (error){
        res.status(400).json({error: error})
    }
}


// sinup user 
const Login = async (req, res) => {
    const {
        email,
        password
    } = req.body

  

    try {
        const users = await usersmodel.findOne({email:email})
        const sax = await bcrypt.compare(password, users.password);
        if(sax){
            res.status(200).json(users)
            console.log(users)
        }
        if(!sax){
            ""
        }
        
    
    
    } catch (error){
        res.status(400).json({error: "qalad"})
    }
}



// get one user 
const getoneuser = async (req, res) => {
    const {id} =  req.params
    const user = await usersmodel.findById(id)
    res.status(200).json(user)
}


module.exports = {
    sinup,
    Login,
    getoneuser
} 
