import USERS_DB from "../../../models/users"
import connectDB from "../../../utils/dbConnection"
import { verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

const handler = async (req,res) => {

    await connectDB()

    switch (req.method) {
        case "GET":
            getUser(req,res)
            break;
        default:
            break;
    }

}

const getUser = async (req,res) => {

    const token = (req.cookies.token)
    const checkToken = verify(token, JWT_SECRET)
    
    if(!token){
        res.status(500).json({ message: "No token provided" })
    }
    if(!checkToken){
        res.status(401).json({message: "Unauthorized"})
    }
    const user = await USERS_DB.findById(checkToken.id) 
    
    if(!user){
        res.status(404).json({ message: "User not found" })
    }
    
    res.status(200).json(user)
        
}

export default handler