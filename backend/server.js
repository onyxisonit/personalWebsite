//Import necessary modules
import express from "express"; //Web framework
import mongoose from "mongoose"; //ODM
import cors from "cors"; //Middleware
import dotenv from "dotenv"; //Load enviornmental variables from .env
//import User from './models/User.js';


//Load enviornment variables
dotenv.config(); 

// Initialize Express app to define routes, middleware, etc.
const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON data
app.use(cors());         // Allows frontend to make API requests

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

//More testing routes
/*
app.post("/test-user", async (req, res) => {
    const newUser = new User({ name: "nyx", email: "nyx@example.com" });
    await newUser.save();
    res.send("User saved!");
});

app.get("/ping-db", async (req, res) => {
    try {
      await mongoose.connection.db.command({ ping: 1 });
      res.send("MongoDB ping successful!");
    } catch (err) {
      res.status(500).send("MongoDB ping failed.");
    }
});
*/

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => { //Start the server and listen for incoming requests
  console.log(`Server running on port ${PORT}`);
});

