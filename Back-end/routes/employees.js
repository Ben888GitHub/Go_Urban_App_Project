const router = require("express").Router();
let Employee = require("../models/employees.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(error => res.status(400).json("Error :" + error));
});

router.route("/add").post((req, res) => {
  const employeeName = req.body.employeeName;
  const profession = req.body.profession;
  const gender = req.body.gender;
  const ageGroup = req.body.ageGroup;

  const newEmployee = new Employee({
    employeeName,
    profession,
    gender,
    ageGroup
  });

  newEmployee
    .save()
    .then(res.json("New Employee has been added"))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;
