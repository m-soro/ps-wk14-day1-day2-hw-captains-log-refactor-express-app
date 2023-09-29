// STEP 1 IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2 CREATE YOUR SCHEMA
const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
});

// STEP 3 CREATE YOUR MODEL USING SCHEMA
const Comment = mongoose.model("Comment", commentSchema);

// STEP 4 EXPORT YOUR NEWLY CREATED MODEL
module.exports = Comment;
