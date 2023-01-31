const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  applicationId: { type: Number, unique: true },
  jobTitle: { type: String, required: true, unique: true },
  company: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Application", ApplicationSchema);
