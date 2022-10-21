import PRODUCTS_DB from "../../../models/products"
import connectDB from "../../../utils/dbConnection"
import { serialize } from "cookie"
import jwt from "jsonwebtoken"


const JWT_KEY = process.env.JWT_KEY

const handler = async (req,res) => {
    
    connectDB()
    getProducts(req,res)
 
}

const getProducts = async (req,res) => {
    const products = await PRODUCTS_DB.find()
    return res.send(products)
}

export default handler