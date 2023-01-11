const express = require("express");
const app = express();
const PORT = 8080;
const pool = require("./db/index");
const cors = require("cors");

app.use(express.json());
app.use(cors());
// ROUTES

//create a user
app.post("/users", async (req, res) => {
  try {
    const { id, username, first_name, last_name, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (id, username, first_name, last_name, password) VALUES($1, $2, $3, $4, $5)",
      [id, username, first_name, last_name, password]
    );

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

//get all users

//get a user

//update a user

// PORT connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
