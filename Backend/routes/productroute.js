const productcontroller = require("../controllers/productcontroller");
const router = require("express").Router();
const usermiddleware=require('../middlewares/userauthmiddleware')


router
.route("/createProduct")
.post(usermiddleware.isauthorized,productcontroller.createProduct);

router
.route("/getproducts/:id")
.get(productcontroller.getproduct);

router
.route("/getAllProducts")  
.get(productcontroller.getAllProducts);

router
.route("/updateProducts/:id")
.patch(usermiddleware.isauthorized,productcontroller.UpdateProducts);

router
.route("/deleteProducts/:id")    
.delete(usermiddleware.isauthorized,productcontroller.deleteProducts);

router
.route("/searchProduct/:query")
.get(productcontroller.searchProduct);

router
.route('/newArrivals')
.get(productcontroller.newArrivals)
module.exports = router;
