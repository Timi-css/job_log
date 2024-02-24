const express = require("express");
const app = express();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Application = require("../model/Application");
const { route } = require("./userRoutes");
const multer = require("multer");
const path = "../uploads";
app.use("/uploads", express.static("/uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../express-backend/uploads");
  },
  filename: function (req, file, cb) {
    //     if (file.originalname.includes(".pdf")) {
    //       cb(null, file.originalname.split(".pdf")[0] + "_" + Date.now() + ".pdf");
    //     } else
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "resume", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 },
]);

app.post("/upload", upload, async (req, res) => {
  console.log("REQ FILES", req.files);
  try {
    const resumePath = req.files["resume"][0].filename;
    const coverLetterPath = req.files["coverLetter"][0].filename;

    const application = await Application.findByIdAndUpdate(
      req.body.applicationId,
      {
        resumePath,
        coverLetterPath,
      },
      { new: true }
    );
    res.json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/download/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "uploads", fileName);

  res.download(filePath);
});

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

// Create New Application
app.post(
  "/create-applications",
  authenticateToken,
  upload,
  async (req, res) => {
    console.log("Starting New Application");
    try {
      const {
        applicationIds,
        jobTitle,
        company,
        dateApplied,
        interviewStage,
        offerStatus,
        jobDescription,
        notes,
      } = req.body;
      const resumePath = req.files["resume"][0].filename;
      const coverLetterPath = req.files["coverLetter"][0].filename;

      const userId = req.user.user._id;

      const newApplication = await Application.create({
        applicationIds: applicationIds,
        jobTitle: jobTitle,
        company: company,
        dateApplied: dateApplied,
        resumePath: resumePath,
        coverLetterPath: coverLetterPath,
        userId: userId,
        interviewStage: interviewStage,
        offerStatus: offerStatus,
        jobDescription: jobDescription,
        notes: notes,
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
  }
);

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

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.applicationIds);
  } catch (err) {
    console.error("Error trying to get Application", err);
    res.status(500).json({ message: err.message });
  }
});

// Get application  by id
app.get(
  "/user-application/:applicationsId",
  authenticateToken,
  async (req, res) => {
    try {
      const application = await Application.findById(req.params.applicationsId);
      if (!application) {
        return res
          .status(404)
          .json({ message: "Cannot find this application." });
      }
      res.status(200).json(application);
    } catch (err) {
      console.error("Error getting  applciation by ID : ", err);
      res.status(500).json({ message: err.message });
    }
  }
);

// Delete application by Id
app.delete(
  "/user-application/:applicationsId",
  authenticateToken,
  async (req, res) => {
    try {
      const applciation = await Application.findByIdAndDelete(
        req.params.applicationsId
      );
      if (!applciation) {
        return res
          .status(404)
          .json({ message: "Cannot find application with this ID!" });
      }
      res.status(200).json({ message: "Application deleted successfully." });
    } catch (err) {
      console.error("Error deleting application; ", err);
      res.status(500).json({ message: err.message });
    }
  }
);

app.put(
  "/user-application/:applicationsId",
  authenticateToken,
  async (req, res) => {
    try {
      const application = await Application.findByIdAndUpdate(
        req.params.applicationsId,
        req.body,
        { new: true }
      );
      if (!application) {
        return res
          .status(404)
          .json({ message: "Cannot find application with this ID!" });
      }
      console.log("Update App: ", application);
      res.status(200).json({ message: "Application updated successfully." });
    } catch (error) {}
  }
);

module.exports = app;
