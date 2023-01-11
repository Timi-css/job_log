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
    const { id, username, first_name, last_name, email, password, avatar } =
      req.body;
    const newUser = await pool.query(
      "INSERT INTO users (id, username, first_name, last_name, email, password, avatar) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [id, username, first_name, last_name, email, password, avatar]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, first_name, last_name, email, password, avatar } =
      req.body;
    const updateUser = await pool.query(
      "UPDATE users SET username = $1, first_name = $2, last_name= $3,email = $4, password = $5, avatar = $6 WHERE id = $7",
      [username, first_name, last_name, email, password, avatar, id]
    );

    res.json("Information Updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a user

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await pool.query("DELETE FROM users WHERE id  = $1", [
      id,
    ]);
    res.json("User deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
});

// PORT connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
