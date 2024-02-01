const express = require("express");
const app = express();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Application = require("../model/Application");
const { route } = require("./userRoutes");
const multer = require("multer");
const upload = multer();
app.use(upload.any());

// app.use(cors);

// Middleware for user auth
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(400);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user.user);
    next();
  });
}

// New Application
app.post("/create-applications", authenticateToken, async (req, res) => {
  console.log("Starting New Application");
  try {
    const {
      applicationIds,
      jobTitle,
      company,
      dateApplied,
      resume,
      coverLetter,
    } = req.body;
    //     console.log("REQ BODY: ", req.body);

    const userId = req.user.user._id;

    const newApplication = await Application.create({
      applicationIds: applicationIds,
      jobTitle: jobTitle,
      company: company,
      dateApplied: dateApplied,
      resume: resume,
      coverLetter: coverLetter,
      userId: userId,
    });
    const user = await User.findById(userId);
    if (user) {
      user.applicationIds.push(newApplication._id);
      await user.save();
    }

    res.status(201).json({ message: "Application Created" });
    console.log("Application Created!");
  } catch (err) {
    console.error("Error creating new application", err);
    res.status(400).json({ error: err.message });
  }
});

// Get applications per user
app.get("/user-applications/:id", authenticateToken, async (req, res) => {
  console.log("Getting application");
  try {
    const userId = req.user.user._id;
    console.log("UserID: ", userId);
    const user = await User.findById(userId).populate({
      path: "applicationIds",
      model: "Application",
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.applicationIds);
  } catch (err) {
    console.error("Error trying to get Application", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
