const express = require("express");
const router = express.Router();
const Food = require("../models/foodlogs");
const foodData = require("../utilities/foodData");

// SEED THE DB
router.get("/seed-food", async (req, res) => {
  await Food.deleteMany({});
  await Food.insertMany(foodData);
  console.log("Seed is done!");
});

// -------------
// INDEX
// -------------
router.get("/index", async (req, res) => {
  try {
    const logs = await Food.find();
    res.render("foodlogs/Index", { logs });
  } catch (error) {
    console.log(error);
  }
});
// -------------
// NEW
// -------------
router.get("/new", (req, res) => {
  res.render("foodlogs/New");
});
// -------------
// DELETE
// -------------
router.delete("/:id", async (req, res) => {
  try {
    await Food.findByIdAndRemove(req.params.id);
    res.redirect("Index"); // redirect back to logs index
  } catch (error) {
    console.log(error);
  }
});
// -------------
// UPDATE
// -------------
router.put("/:id", async (req, res) => {
  try {
    await Food.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/foodlogs/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// -------------
// CREATE
// -------------
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    await Food.create(req.body);
    res.redirect("/foodlogs/Index");
  } catch (error) {
    console.log(error);
  }
});

// -------------
// EDIT
// -------------
router.get("/:id/edit", async (req, res) => {
  try {
    const log = await Food.findById(req.params.id);
    res.render("foodlogs/Edit", { log });
  } catch (error) {
    console.log(error);
  }
});

// -------------
// SHOW
// -------------
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const log = await Food.findById(req.params.id);
    res.render("foodlogs/Show", { log });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
