const CommentModel = require("../models/Comments")


// get comments 
const GetComments = async (req, res) => {
    const data = await CommentModel.find({}).sort({createdAt: -1})
    res.status(200).json(data)
}


// new Comment 
const NewComment = async (req, res) =>{
    const  {
        Rate,
        Comment,
        Jobid,
        Userid,
        Username
    } = req.body


    try {
        const data = await CommentModel.create({
            Rate,
            Comment,
            Jobid,
            Userid,
            Username
        })

        res.status(200).json(data)
    } catch(error) {
        res.status(400).json({error: "Qalad Ayaa Dhacay"})

    }
}


module.exports ={
    GetComments,
    NewComment
}