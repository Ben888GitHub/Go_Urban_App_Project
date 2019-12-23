const router = require("express").Router();
let Companies = require("../models/companies.model");


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

router.route("/:id").get((req, res) => {
  Companies.findById(req.params.id)
  .then(companies => res.json(companies))
  .catch(error => res.status(400).json("Error: " + error))
})

router.route("/:id").delete((req, res) => {
  Companies.findByIdAndDelete(req.params.id)
  .then(() => {res.json(`The Companies in ${req.params.id} has been deleted`)})
  .catch(error => res.status(400).json("Error: " + error))
})

router.route("/update/:id").post((req, res) => {
  Companies.findById(req.params.id)
  .then(companies => {
    companies.companyName = req.body.companyName
    companies.profession = req.body.profession
    companies.gender = req.body.gender
    companies.ageGroup = Number(req.body.ageGroup)
    companies.annualSalary = Number(req.body.annualSalary)
    companies.jobDesc = req.body.jobDesc

    companies.save()
  .then(res.json("Exercise Updated"))
  .catch(error => res.status(400))
  })
  .catch(error => res.status(400).json("Error: " + error))
})

module.exports = router;
