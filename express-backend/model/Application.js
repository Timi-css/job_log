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
  resumePath: { type: String, required: true },
  coverLetterPath: { type: String, required: true },
  interviewStage: { type: String, required: false },
  offerStatus: { type: String, required: false },
  jobDescription: { type: String, requiored: false },
  notes: { type: String, required: false },
});

module.exports = mongoose.model("Application", ApplicationSchema);

/*

{
    "jobTitle": "Software Developer",
    "company": "ABC Tech",
    "dateApplied": "2024-02-01"

}
*/
