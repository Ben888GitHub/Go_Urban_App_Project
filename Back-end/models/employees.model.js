const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    employeeName: { type: String, required: true },
    profession: { type: String, required: true },
    gender: { type: String, required: true },
    ageGroup: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
