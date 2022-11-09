import USERS_DB from "../../models/users"
import connectDB from "../../utils/dbConnection"
import { serialize } from "cookie"
import bcrypt from "bcrypt-nodejs"
import { decode, verify, sign } from "jsonwebtoken"


const JWT_SECRET = process.env.JWT_SECRET

const handler = async (req,res) => {
    
    connectDB()

    switch (req.method) {
        case "GET":
            tokenVerify(req,res)
        break
        case "POST":
            loginUser(req,res)
            break;
        case "DELETE":
            logoutUser(req,res)
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
        const token = sign({
            id:user._id,
            email:user.email,
            name:user.name,
            password:user.password
        }, JWT_SECRET)

        const serialized = serialize("token", token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite:"strict",
            path:"/",
            maxAge:1000000
        })

        res.setHeader("Set-Cookie", serialized)
        res.end()
    }
}

const logoutUser = async (req, res) => {
    res.setHeader("Set-Cookie",
        serialize("token", null,{
            maxAge:0,
            path:"/"
        }))   
    res.end()
}

const tokenVerify = async (req, res) => {

    let checkToken
    let decodeToken
    const { token } = req.cookies
  
    if(!token){
        return res.send({auth:false,payload:null})
    }else{
        try {
            checkToken = verify(token,JWT_SECRET)
            decodeToken = decode(token,JWT_SECRET)
        } catch (error) {
            error.statusCode=500
            throw error
        }
        if(!checkToken){
            error.statusCode = 401
            throw error
        }
    }
    const { id, name, email } = decodeToken
    return res.send(
        {
            auth:Boolean(checkToken),
            payload:{
                id,
                name,
                email
            }
        }
    )
}

export default handler