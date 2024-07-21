const ratingcontroller = require("../controllers/ratingcontroller");
const express = require("express");
const router = express.Router();

router
.route("/addrating")
.post(ratingcontroller.addrating);

router
.route("/deleterating")
.delete(ratingcontroller.deleterating);



module.exports = router