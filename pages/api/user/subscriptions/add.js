import USERS_DB from "../../../../models/users"
import connectDB from "../../../../utils/dbConnection"
import { decode, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

const handler = async (req,res) => {

    connectDB()

    switch (req.method) {
        case "PUT":
            addSubscriptions(req,res)
            break;
        default:
            break;
    }

}

const addSubscriptions = async (req,res) => {

    let verifyToken = verify(req.cookies.token,JWT_SECRET)
    let decodeToken
    
    if(verifyToken){
        decodeToken = decode(req.cookies.token, JWT_SECRET)
    }else{
        return res.status(500).json({message:"Bad Token"})
    }

    const user = await USERS_DB.findById(decodeToken.id)
    const repeatedItems = req.body.filter(sub => user.subscriptions.some(newSub=>newSub.item.title === sub.item.title && newSub.item.size === sub.item.size))
    const newItems = req.body.filter(sub => !user.subscriptions.some(newSub=>newSub.item.title === sub.item.title && newSub.item.size === sub.item.size))

    if(repeatedItems.length > 0){
        repeatedItems.map(async product=>{
            await USERS_DB.findByIdAndUpdate(
                { _id: decodeToken.id },
                { "$inc": { 'subscriptions.$[el].quantity': product.quantity } },
                { 
                    arrayFilters: [{ "el.item.title": product.item.title , "el.item.size": product.item.size }],
                    new: true
                }
            );
        })
    }

    if(newItems.length > 0){
        await USERS_DB.findByIdAndUpdate(decodeToken.id, { "$push": { subscriptions: { "$each": newItems }}})
    }

    return res.status(200).json({message:"subscriptions added correctly."})
}

export default handler