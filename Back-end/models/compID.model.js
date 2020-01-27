const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const compIDSchema = new Schema({
  id: { type: Number, required: true }
});

const CompID = mongoose.model(compIDSchema);

module.exports = CompID;
