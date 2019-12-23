const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const Companies = mongoose.model("Companies", companiesSchema);

module.exports = Companies;
