//Import necessary modules
import express from "express"; //Web framework
import mongoose from "mongoose"; //ODM
import cors from "cors"; //Middleware
import dotenv from "dotenv"; //Load enviornmental variables from .env
import Contact from './models/Contact.js';
import nodemailer from 'nodemailer';

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
const PORT = process.env.PORT || 5005;
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  //Start the server and listen for incoming requests
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error("MongoDB connection error:", err));


var transport = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,       
    pass: process.env.EMAIL_PASS        
  }
};

var transporter = nodemailer.createTransport(transport);
transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Form Submission",
      text: `From: ${name} (${email})\n\n${message}`
    });

    // Auto-reply to the user
    await transporter.sendMail({
      from: `"Nyx Zhao" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hi ${name},\n\nThanks for reaching out! I received your message and will get back to you as soon as I can.\n\nWarmly,\nNyx`
    });
    
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error, try again later." });
  }
});
