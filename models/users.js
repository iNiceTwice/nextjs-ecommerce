import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    surname:{
        type: String,
    },
    email:{
        type: String,
        required:true,
        trim:true,
    },
    password:{
        type: String,
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
module.exports =  mongoose.model("ecommerseUsers", userSchema)