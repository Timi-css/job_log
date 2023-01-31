const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Server is now connected to client" });
});

// DB connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("DB is connected");
//   })
//   .catch((err) => {
//     console.log(err, "DB is disconnected");
//   });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("strictQuery", true);
// PORT connection
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });
