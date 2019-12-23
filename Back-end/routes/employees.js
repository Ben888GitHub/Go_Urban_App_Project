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


router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id)
  .then(employees => res.json(employees))
  .catch(error => res.status(400).json("Error: " + error))
})

router.route("/:id").delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
  .then(() => res.json(`The Employee in id of ${req.params.id} has been deleted `))
  .catch(error => res.status(400).json("Error: " + error))
})

router.route("/update/:id").post((req, res) => {
  Employee.findById(req.params.id)
  .then(employees => {
    employees.employeeName = req.body.employeeName
    employees.profession = req.body.profession
    employees.gender = req.body.gender
    employees.ageGroup = Number(req.body.ageGroup)

    employees.save()
  .then(() => res.json("Employees Updated"))
  .catch(error => res.status(400).json("Error: " + error))
  })
  .catch(error => res.status(400).json("Error: " + error))
})


module.exports = router;
