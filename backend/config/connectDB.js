import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
   if (!MONGODB_URI) {
      console.error("Environment variable MONGODB_URI is not defined.");
      process.exit(1);
   }

   try {
      const conn = await mongoose.connect(MONGODB_URI);
      console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (error) {
      console.error(`Error connecting to database: ${error.message}`);
      process.exit(1);
   }
};

export default connectDB;
