import USERS_DB from "../../../../models/users"
import connectDB from "../../../../utils/dbConnection"
import { verify } from "jsonwebtoken"
import axios from "axios"

const JWT_SECRET = process.env.JWT_SECRET
const MP_TOKEN = process.env.MP_TOKEN

const handler = async (req,res) => {

    connectDB()

    switch (req.method) {
        case "DELETE":
            deleteSubscription(req,res)
            break;
        default:
            break;
    }

}

const deleteSubscription = async (req,res) => {

    const token = req.cookies.token
    const subId = req.query.delete_id
    const url = `https://api.mercadopago.com/preapproval/${subId}`;
    const checkToken = verify(token, JWT_SECRET)
    if(!token){
        res.status(500).json({ message: "No token provided" })
    }
    if(!checkToken){
        res.status(401).json({message: "Unauthorized"})
    }
    
    try{
        const res = await axios.put(url, {status:"cancelled"},{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${MP_TOKEN}` 
          }
        });
    }catch(error){
        return res.status(500).json({ message:"Error" })
        console.log(error)
    }

    await USERS_DB.findByIdAndUpdate(checkToken.id,{ $pull:{ subscriptions:{ bundle_id: subId } } },(err)=>{
        if(err){
            res.status(500).json({error:err})
            console.log(err)
        }
        res.status(200).json({ message:"Subscription bundle deleted" })
    }).clone()        

}

export default handler