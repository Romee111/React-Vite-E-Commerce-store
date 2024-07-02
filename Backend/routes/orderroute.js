const orderconroller = require("../controllers/ordercontroller");
const express = require("express");

const router = express.Router();

router
.route("/createOrder")
.post(orderconroller.createOrder);

router
.route("/getlistOrder")
.get(orderconroller.getlistOrder);

router
.route("/updateOrder/:id")
.put(orderconroller.updateOrder);

router
.route("/deleteOrder/:id")
.delete(orderconroller.deleteOrder);

module.exports = router;


