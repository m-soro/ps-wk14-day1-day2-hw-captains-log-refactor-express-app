const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");

const foodData = require("./utilities/foodData");
const logController = require("./controllers/log");
const foodLogController = require("./controllers/foodlogs");
const dotenv = require("dotenv");
dotenv.config();

//DEPENDENCIES - REQUIRE MONGOOSE
const mongoose = require("mongoose");
// SCHEMA MODEL
const Log = require("./models/logs.js");
const FoodLog = require("./models/foodlogs.js");
// MUST HAVE BODY PARSER - TO READ FROM THE FORM
app.use(express.urlencoded({ extended: false }));
// USE METHOD OVERRIDE FOR FORM TO CREATE A DELETE REQUEST
app.use(methodOverride("_method"));
// FOR HOSTING STATIC FILES
app.use(express.static("public"));
// VIEW TEMPLATE ENGINE
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);
// console.log(process.env);

// CONNECTION ERROR/SUCCESS - OPTIONAL BUT HELPFUL
// DEFINE CALLBACK FUNCTIONS FRO VARIOUS EVENTS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.use("/logs", logController);
app.use("/foodlogs", foodLogController);

// -------------
// HOME
// -------------
app.get("/", (req, res) => {
  res.render("logs/Home");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
