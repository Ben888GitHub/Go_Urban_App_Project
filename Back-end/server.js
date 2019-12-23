const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config(); 

const app = express(); 
const PORT = 5123; 

app.use(cors());
app.use(express.json()); 


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB Connection is successfully established! ");
});


const companiesRouter = require("./routes/companies"); 
const employeesRouter = require("./routes/employees"); 

app.use("/companies", companiesRouter); 
app.use("/employees", employeesRouter); 

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
