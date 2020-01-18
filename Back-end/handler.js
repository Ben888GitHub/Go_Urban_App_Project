"use strict";
// const awsServerlessExpress = require("aws-serverless-express");
// const server = require("./server");
// const the_server = awsServerlessExpress.createServer(server);

const ATLAS_URI =
  "mongodb+srv://bendev:4321@gourbanapp-dqv61.mongodb.net/test?retryWrites=true&w=majority";

const mongoose = require("mongoose");
let connectorMonogodb = mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const Schema = mongoose.Schema; // Initialise Schema to mongoose.Schema to create a document data

// initialise the companiesSchema to new Schema which contains the document data
const companiesSchema = new Schema(
  {
    id: { type: Number, required: true },
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
let Companies = mongoose.model("Companies", companiesSchema);

// initialise the employeesSchema to new Schema which contains the document data
const employeeSchema = new Schema(
  {
    id: { type: Number, required: true },
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

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("Mongo DB Connection is successfully established! ");
// });

exports.gourbanapp = (event, context, callback) => {
  // awsServerlessExpress.proxy(the_server, event, context);
  context.callbackWaitsForEmptyEventLoop = false;

  connectorMonogodb.then(() => {
    Companies.find()
      .then(companies => {
        console.log(companies);
        callback(null, {
          statusCode: 200,
          // headers: { "Content-Type": "application/json" },
          // headers: {
          //   "Access-Control-Allow-Origin" : "*",
          //   "Access-Control-Allow-Credentials" : true
          // },
          // body: JSON.stringify(companies)
          body: companies
        });

        // mongoose.connection.close();
      })
      .catch(error => callback(error));
  });
};

exports.employees = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectorMonogodb.then(() => {
    Employee.find()
      .then(employee => {
        console.log(employee);
        callback(null, {
          statusCode: 200,
          body: employee
        });
      })
      .catch(error => callback(error));
  });
};
exports.addCompanies = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectorMonogodb.then(() => {
    const id = event.body.id;
    const companyName = event.body.companyName;
    const profession = event.body.profession;
    const gender = event.body.gender;
    const ageGroup = event.body.ageGroup;
    const annualSalary = event.body.annualSalary;
    const jobDesc = event.body.jobDesc;

    const newCompanies = new Companies({
      id,
      companyName,
      profession,
      gender,
      ageGroup,
      annualSalary,
      jobDesc
    });

    newCompanies
      .save()
      .then(
        callback(null, {
          statusCode: 200,
          body: "new companies has been added"
        })
      )
      .catch(error => callback(error));
  });
};

exports.addEmployees = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectorMonogodb.then(() => {
    const id = event.body.id;
    const employeeName = event.body.employeeName;
    const profession = event.body.profession;
    const gender = event.body.gender;
    const ageGroup = event.body.ageGroup;

    const newEmployees = new Employee({
      id,
      employeeName,
      profession,
      gender,
      ageGroup
    });

    newEmployees
      .save()
      .then(
        callback(null, {
          statusCode: 200,
          body: "new employee has been added"
        })
      )
      .catch(error => callback(error));
  });
};
