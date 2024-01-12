import mongoose from "mongoose";




const dbConnection=async()=>{
    const DB_URI="mongodb+srv://sumitagar2003:jobportol@jobportol.gfg6hka.mongodb.net/";
    try {
        await mongoose.connect(DB_URI,{useUnifiedTopology: true});
        console.log("DataBase Connection Successfull")
    } catch (error) {
        console.error("DB Connection Failed: ",error.message);
    }
}


export default dbConnection;