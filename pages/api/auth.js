import USERS_DB from "../../models/users"
import connectDB from "../../utils/dbConnection"
import bcrypt from "bcrypt-nodejs"
import jwt from "jsonwebtoken"


const JWT_KEY = process.env.JWT_KEY

const handler = async (req,res) => {
    
    connectDB()

    switch (req.method) {
        case "POST":
            loginUser(req,res)
            break;
        default:
            break;
    }

}

const loginUser = async (req,res) => {
    const { password, email } = req.body
    const user = await USERS_DB.findOne({email})
    if(!user){
        return res.status(401).send({message:"bad credentials"})
    }else if(!bcrypt.compareSync(password, user.password)){
        return res.status(401).send({message:"bad credentials"})
    }else{
        const token = jwt.sign({
            id:user._id,
            email:user.email,
            password:user.password
        },JWT_KEY)
        return res.send({token})
    }
}

export default handler