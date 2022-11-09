import USERS_DB from "../../../models/users"
import connectDB from "../../../utils/dbConnection"
import { verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

const handler = async (req,res) => {

    connectDB()

    switch (req.method) {
        case "GET":
            getUser(req,res)
            break;
        default:
            break;
    }

}

const getUser = async (req,res) => {

    const token = (req.headers.cookie)
    const checkToken = verify(token, JWT_SECRET)

    if(!checkToken){
        res.status(401).json({message: "Unauthorized"})
    }
    if(!token){
        res.status(500).json({ message: "No token provided" })
    }
    const user = await USERS_DB.findById(checkToken.id) 

    if(!user){
        res.status(404).json({ message: "User not found" })
    }
    
    res.send(user)
        
}

export default handler