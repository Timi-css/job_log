const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  applicationId: { type: Number, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  confrimPassword: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserSchema);
