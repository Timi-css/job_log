const mongoose = require("mongoose");
const gridfs = require("gridfs-stream");

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: String, // Change the type to String
    ref: "User",
    index: true,
  },
  applicationId: { type: Number, unique: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  dateApplied: { type: Date, required: true },
  resume: { type: String, required: true },
  coverLetter: { type: String, required: true },
});

module.exports = mongoose.model("Application", ApplicationSchema);

/*

{
    "jobTitle": "Software Developer",
    "company": "ABC Tech",
    "dateApplied": "2024-02-01"

}
*/
