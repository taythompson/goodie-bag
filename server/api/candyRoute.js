const express = require("express");
const { Candy } = require("../db/database");
const router = express.Router();

router.get("/candies", async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
