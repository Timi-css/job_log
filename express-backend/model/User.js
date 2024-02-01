const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: () => nanoid(), // Use nanoid to generate a unique user ID
      unique: true,
    },
    applicationIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ],
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
