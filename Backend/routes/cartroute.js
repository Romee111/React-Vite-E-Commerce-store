const cartcontroller = require ("../controllers/cartcontroller");
const express = require("express");
const router = express.Router();

router
.route("/addItemToCart")
.post(cartcontroller.addItemToCart);

router
.route("/removeItemFromCart/:id")
.delete(cartcontroller.removeItemFromCart);

router 
.route("clearCart")
.delete(cartcontroller.clearCart);

router
.route("/viewCart")
.get(cartcontroller.viewCart);

module.exports = router;