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
