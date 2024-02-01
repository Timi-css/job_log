const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoute = require("./routes/userRoutes.js");
const applicationRoutes = require("./routes/applicationRoutes.js");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB");
    console.error(err);
    process.exit(1);
  });

app.use("/api", userRoute, applicationRoutes, (req, res) => {
  res.json("API works fine");
});

// app.use("/api", applicationRoutes, (req, res) => {
//   res.json("Appliction routes works just fine");
// });

app.get("/api", userRoute, applicationRoutes);

// PORT connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
