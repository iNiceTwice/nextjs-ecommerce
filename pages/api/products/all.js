import PRODUCTS_DB from "../../../models/products"
import connectDB from "../../../utils/dbConnection"

const handler = async (req,res) => {
    
    await connectDB()

     switch (req.method) {
        case "GET":
            getProducts(req,res)
        break
        default:
            break;
    }
 
}

const getProducts = async (req,res) => {
    const products = await PRODUCTS_DB.find()
    return res.send(products)
}

export default handler