import PRODUCTS_DB from "../../../models/products"
import connectDB from "../../../utils/dbConnection"

const handler = async (req,res) => {
    
    await connectDB()

     switch (req.method) {
        case "GET":
            getProduct(req,res)
        break
        default:
            break;
    }
 
}

const getProduct = async (req,res) => {

    const product = await PRODUCTS_DB.find({url:req.query.query})
    res.status(200).send(product)

}

export default handler