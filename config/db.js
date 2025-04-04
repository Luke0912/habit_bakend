import mongoose from "mongoose";



export const connectDb = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongo db connected: ', connection.connection.host);
    } catch (error) {
        console.log('error: ', error);
        process.exit(1)
        
    }
    
}
