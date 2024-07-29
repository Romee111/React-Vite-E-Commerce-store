const sellerscontroller=require("../controllers/sellerscontroller");
const express = require("express");
const router = express.Router();

router
.route("/createSeller")
.post(sellerscontroller.createSeller);
module.exports=router