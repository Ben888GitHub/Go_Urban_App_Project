const router = require("express").Router();
let Companies = require("../models/companies.model");

// Get the data from the Companies collection on the database
router.route("/").get((req, res) => {
  Companies.find()
    .then(companies => res.json(companies))
    .catch(error => res.status(400).json("Error :" + error));
});

router.route("/add").post((req, res) => {
  const companyName = req.body.companyName;
  const profession = req.body.profession;
  const gender = req.body.gender;
  const ageGroup = req.body.ageGroup;
  const annualSalary = req.body.annualSalary;
  const jobDesc = req.body.jobDesc;

  const newCompanies = new Companies({
    companyName,
    profession,
    gender,
    ageGroup,
    annualSalary,
    jobDesc
  });
  newCompanies
    .save()
    .then(res.json("New Exercise has been added"))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;
