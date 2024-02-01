const express = require("express");
const app = express();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const authMiddleware = require("../middleware/authMiddleware");

// app.use(cors());

// Sign Up Route
app.post("/signup", async (req, res) => {
  console.log("SignUP Starting");
  const { username, firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const existingUser = await User.findOne({ email, username });

    if (existingUser) {
      console.log("Cannot register same user twice!");
      return res.status(409).json({ error: "User Exists" });
    }

    await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.json("User Created");
    console.log("Signup Successful");
  } catch (err) {
    console.log("Error creating user");

    console.error(err.message);
    res.status(500).json(err);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(400);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user);
    next();
  });
}

// login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Find the user by their email
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "Email or password is incorrect" });
  }
  if (bcrypt.compareSync(password, user.password)) {
    const accessToken = jwt.sign({ user }, process.env.JWT_SECRET);
    if (res.statusCode === 201 || 200) {
      console.log("Login Successful");
      return res.json({ status: "ok", data: accessToken });
    } else {
      return res.json({ error: "error" });
    }
  }

  res.json({ status: "error", error: "Invalid Password" });
});

// Get all users

app.get("/userlists", async (req, res) => {
  console.log("Uh-oh, someone made a req, are they verified");
  const query = req.body.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 })
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one user
app.get("/user", authMiddleware, async (req, res) => {
  try {
    // Access user information from the request (added by the authentication middleware)
    const user = req.user;
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/application", async (req, res) => {});

app.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = app;
