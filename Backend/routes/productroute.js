const productcontroller = require("../controllers/productcontroller");
const router = require("express").Router();
const usermiddleware=require('../middlewares/userauthmiddleware')


router
.route("/createProduct")
.post(middleware.isauthorized,productcontroller.createProduct);

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
.put( usermiddleware.isauthorized, productcontroller.updateProducts);

router
.route("/deleteProducts/:id")    
.delete(  usermiddleware.isauthorized,productcontroller.deleteProducts);

router
.route("/searchProduct/:query")
.get(productcontroller.searchProduct);

router
.route('/newArrivals')
.get(productcontroller.newArrivals)
 
router
.route('/getProductsBySeller')
.get(middleware.isauthorized, productcontroller.getProductsBySeller)

module.exports = router;
