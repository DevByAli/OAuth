import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv("dotenv");
const dbURL = process.env.DB_URL;

export const connectDb = async () => {
  console.log("connecting to db....");
  try {
    await mongoose.connect(dbURL);
    console.log("DataBase connected");
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDb, 5000);
  }
};
