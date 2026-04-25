import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("ENV:", process.env.MONGODB_URI);

   const connectionInstances = await mongoose.connect(
  process.env.MONGODB_URI
);

    console.log(
      `MongoDB connected ✅ Host: ${connectionInstances.connection.host}`
    );
    return connectionInstances;
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;