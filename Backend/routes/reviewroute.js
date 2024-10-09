const { models } = require("mongoose");
const reviewcontroller = require("../controllers/reviewcontroller");
const express = require("express");
const router = express.Router();

router
.route("/addreview")
.post(reviewcontroller.addreview);

router
.route("/getreviewsById/:id")
.get(reviewcontroller.getreviewsById);

router
.route("/getreviews")
.get(reviewcontroller.getreviews);

router
.route("/deletereview")
.delete(reviewcontroller.deletereview);

module.exports = router