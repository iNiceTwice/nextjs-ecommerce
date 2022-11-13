import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.MONGO_PASS, { useNewUrlParser: true })
        .then(data=>console.log("- Database Online -"))
        .catch(err=>console.log(err))
} 
//sss
export default connectDB