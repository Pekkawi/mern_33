import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // useful when working with search functionality

  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

export default connectDB;
