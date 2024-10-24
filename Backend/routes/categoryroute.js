const express = require("express");
const router = express.Router();
const usermiddleware=require('../middlewares/userauthmiddleware')
const categoryController=require("../controllers/categorycontroller");


router
.route("/createCategory")
.post(usermiddleware.isauthorized,categoryController.createCategory);

router
.route("/getCategory/:id")
.get(categoryController.getCategory);

router
.route("/getallCategory")
.get(categoryController.getallCategory);

router
.route("/updateCategory/:id")
.put(usermiddleware.isauthorized,categoryController.updateCategory);

router
.route("/deleteCategory/:id")
.delete(usermiddleware.isauthorized,categoryController.deleteCategory);

router
.route("/getsubCategorytoCategory/:id")
.get(categoryController.getsubCategorytoCategory);
module.exports=router

