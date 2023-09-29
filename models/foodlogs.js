// STEP 1 IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2 CREATE YOUR SCHEMA
const foodLogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// STEP 3 CREATE YOUR MODEL USING SCHEMA
const FoodLog = mongoose.model("foodLogSchema", foodLogSchema);

// STEP 4 EXPORT YOUR NEWLY CREATED MODEL
module.exports = FoodLog;
