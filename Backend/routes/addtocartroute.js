const addtocartcontroller = require("../controllers/addtocartcontroller");
const express = require("express");
const router = express.Router();



router
.route("/createCart")
.post(addtocartcontroller.createCart);


router
.route("/getCart")
.get(addtocartcontroller.getCart);


router
.route("/getCartById/:id")
.get(addtocartcontroller.getCartById);

router
.route("/updateCart")
.put(addtocartcontroller.updateCart);



router
.route("/deleteCart")
.delete(addtocartcontroller.deleteCart);

module.exports = router