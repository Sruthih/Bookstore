
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/BookStore"; // Replace with your connection string

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

