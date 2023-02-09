const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoute = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err, "DB unreachable");
  });

app.use("/api", userRoute);

app.get("/api", (req, res) => {
  res.json({ message: "Backend is now connected to react" });
});

// PORT connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
