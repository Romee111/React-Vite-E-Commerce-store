const  subcategorycontroller=require('../controllers/subcategorycontroller');
const express=require('express');
const router=express.Router();

router
.route("/addsubcategory")
.post(subcategorycontroller.addsubcategory);

router
.route("/getsubcategory/:id")
.get(subcategorycontroller.getsubcategory);

router
.route("/getallsubcategory/:categoryid")
.get(subcategorycontroller.getallsubcategory);

router
.route("/updatesubcategory/:id")
.put(subcategorycontroller.updatesubcategory);

router
.route("/deletesubcategory/:id")
.delete(subcategorycontroller.deletesubcategory);
module.exports=router