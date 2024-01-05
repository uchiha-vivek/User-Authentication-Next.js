import mongoose from "mongoose";


const Connection = async() => {

    try{
       await  mongoose.connect(process.env.MONGODB_URI,{useUnifiedTopology:true})
         console.log("Database connected successfully")

    } catch(e){
        console.log("Error while connecting to the database", e.message)

    }
}
export default Connection