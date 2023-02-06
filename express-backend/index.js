const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoute = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Server is now connected to client" });
});

app.get("/hello", (req, res) => {
  res.send("Hello!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

app.use("/api", userRoute);

// PORT connection
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });
