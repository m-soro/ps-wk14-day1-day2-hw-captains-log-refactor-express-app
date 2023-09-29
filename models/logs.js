// STEP 1 IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2 CREATE SCHEMA
const logSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    author: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// STEP 3 CREATE MODEL SCHEMA
const Log = mongoose.model("Log", logSchema);

// STEP 4 EXPORT THE CREATED MODEL
module.exports = Log;
