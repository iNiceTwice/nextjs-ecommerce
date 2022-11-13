import { MongoClient } from "mongodb"

let mongoClient = null

if(!process.env.MONGO_PASS){
    throw new Error("Please add your Mongo URI to .env.local")
}

const connectDB = async () => {
    if(mongoClient){
        return { mongoClient }
    }
    console.log(mongoClient)

    try {
        mongoClient = await (new MongoClient(process.env.MONGO_PASS, { useNewUrlParser: true }).connect())
        console.log("-- Database Connected --")
        return { mongoClient }
    } catch (error) {
        console.log(error)
    }   
} 

export default connectDB