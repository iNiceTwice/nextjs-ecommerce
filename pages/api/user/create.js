import USERS_DB from "../../../models/users"
import connectDB from "../../../utils/dbConnection"
import bcrypt from "bcrypt-nodejs"

const JWT_SECRET = process.env.JWT_SECRET

const handler = async (req,res) => {

    await connectDB()

    switch (req.method) {
        case "POST":
            createUser(req,res)
            break;
        default:
            break;
    }

}

const createUser = async (req,res) => {
    let { password, email, name } = req.body

    if(!password || !email || !name){
        res.status(500).json({message:"Missing credentials"})
    }

    const emailAlreadyExists = await USERS_DB.findOne({ email })

    if( emailAlreadyExists ){
        res.status(409).send({
            message:"This email is already in use"
        })
    }else{
        const encryptedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        req.body.password = encryptedPass
        const newUser = new USERS_DB(req.body)
        await newUser.save()
        res.status(200).send({
            message:"User created successfully"
        })
    }
}

export default handler