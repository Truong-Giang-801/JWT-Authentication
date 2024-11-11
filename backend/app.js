const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());
// Define a simple root route
app.get("/", (req, res) => {
    res.send("Welcome to the backend API!");
  });
// Define routes
app.use("/api/auth", authRoutes); // This handles /api/auth routes
app.use("/api/user", userRoutes); // This handles /api/user routes

module.exports = app;
