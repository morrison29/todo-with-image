import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.LIVE_URL);
        console.log("Database connected sucessfully");
    } catch (error) {
        console.error("Database coneection failed: ", error);
    }
}

export default connectDB;