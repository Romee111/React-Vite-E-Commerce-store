const express = require("express");
const router = express.Router();
const categoryController=require("../controllers/categorycontroller");


router
.route("/createCategory")
.post(categoryController.createCategory);

router
.route("/getCategory/:id")
.get(categoryController.getCategory);

router
.route("/getallCategory")
.get(categoryController.getallCategory);

router
.route("/updateCategory/:id")
.put(categoryController.updateCategory);

router
.route("/deleteCategory/:id")
.delete(categoryController.deleteCategory);

module.exports=router

