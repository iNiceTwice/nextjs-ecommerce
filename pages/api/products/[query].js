import PRODUCTS_DB from "../../../models/products"
import connectDB from "../../../utils/dbConnection"
import { serialize } from "cookie"
import jwt from "jsonwebtoken"


const JWT_KEY = process.env.JWT_KEY

const handler = async (req,res) => {
    
    connectDB()

     switch (req.method) {
        case "GET":
            getProduct(req,res)
        break
        case "POST":
            postProduct(req,res)
        break
        case "PUT":
            putProduct(req,res)
            break;
        case "DELETE":
            deleteProduct(req,res)
            break;
        default:
            break;
    }
 
}

const getProduct = async (req,res) => {
    const product = await PRODUCTS_DB.find({url:req.query.query})
    res.status(200).send(product)
}
const postProduct = async (req,res) => {
    try {
        const newProduct = new PRODUCTS_DB(req.body)
        await newProduct.save()
        return res.status(200).send({message:"New product added successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Server error"})
    }
}
const putProduct = async (req,res) => {

}
const deleteProduct = async (req,res) => {

}

export default handler