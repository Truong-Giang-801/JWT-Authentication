const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// POST request to register a new user
router.post("/register", register);  // This should be a POST route

// POST request for user login
router.post("/login", login);

module.exports = router;
