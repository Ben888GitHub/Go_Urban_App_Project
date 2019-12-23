const mongoose = require("mongoose");

const Schema = mongoose.Schema; // Initialise Schema to mongoose.Schema to create a document data

// initialise the companiesSchema to new Schema which contains the document data
const companiesSchema = new Schema(
  {
    companyName: { type: String, required: true },
    profession: { type: String, required: true },
    gender: { type: String, required: true },
    ageGroup: { type: Number, required: true },
    annualSalary: { type: Number, required: true },
    jobDesc: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

// use mongoose to model the companiesSchema as "Companies" in Companies variable
const Companies = mongoose.model("Companies", companiesSchema);

module.exports = Companies;
