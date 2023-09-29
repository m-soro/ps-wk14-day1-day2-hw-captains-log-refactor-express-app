const express = require("express");
const router = express.Router();
const Log = require("../models/logs");
const logsData = require("../utilities/logsData");

// SEED THE DB
router.get("/seed-log", async (req, res) => {
  await Log.deleteMany({});
  await Log.insertMany(logsData);
  console.log("Seed is done!");
});

// -------------
// INDEX
// -------------
router.get("/index", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("logs/Index", { logs });
  } catch (error) {
    console.log(error);
  }
});
// -------------
// NEW
// -------------
router.get("/new", (req, res) => {
  res.render("logs/New");
});
// -------------
// DELETE
// -------------
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
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
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// -------------
// CREATE
// -------------
router.post("/", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.create(req.body);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// -------------
// EDIT
// -------------
router.get("/:id/edit", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("logs/Edit", { log });
  } catch (error) {
    cosnole.log(error);
  }
});

// -------------
// SHOW
// -------------
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const log = await Log.findById(req.params.id);
    res.render("logs/Show", { log: log });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
