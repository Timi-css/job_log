const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv").config();

router.use(cors());

// Sign Up Route
router.post("/signup", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ email, username });
    if (existingUser) {
      return res.send({ error: "User Exists" });
    }

    await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    jwt.sign(
      {
        email,
        username,
        firstName,
        lastName,
        password,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "Email or password is incorrect" });
  }
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({}, process.env.JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }

  res.json({ status: "error", error: "Invalid Password" });
});

// Get all users

router.get("/userlist", async (req, res) => {
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

module.exports = router;
