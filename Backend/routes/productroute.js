const productcontroller = require("../controllers/productcontroller");
const router = require("express").Router();
const usermiddleware=require('../middlewares/userauthmiddleware')


router
.route("/createProduct")
.post(productcontroller.createProduct);

router
.route("/addManyProducts")
.post(productcontroller.addManyProducts);

router
.route("/getProduct/:id")
.get(productcontroller.getProduct);

router
.route("/getAllProducts")  
.get(productcontroller.getAllProducts);

router
.route("/updateProducts/:id")
.put(productcontroller.updateProducts);

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
