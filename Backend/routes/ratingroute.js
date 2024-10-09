const ratingcontroller = require("../controllers/ratingcontroller");
const express = require("express");
const router = express.Router();

router
.route("/addrating")
.post(ratingcontroller.addrating);

router
.route("/deleterating")
.delete(ratingcontroller.deleterating);

router
.route("/getRatings")
.get(ratingcontroller.getRatings);

router
.route("/getRatingsById/:id")
.get(ratingcontroller.getRatingsById);


module.exports = router