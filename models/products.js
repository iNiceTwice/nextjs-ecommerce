import mongoose from "mongoose"
const Schema = mongoose.Schema

const productSchema = new Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    rating:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true,
        trim:true,
    },
    bonuses:{
        type: Array,
        required:true,
        trim:true
    },
    commentary:{
        type: String,
        trim:true
    },
    img:{
        type: Array,
        required:true,
        trim:true
    },
    url:{
        type: String,
        required:true,
        trim:true
    },
    concentration:{
        type: Array,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})
mongoose.models = {}
module.exports =  mongoose.model("ecommerseproducts", productSchema)