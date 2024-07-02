const userauthcontroller = require("../controllers/userauthcontroller");
// const {updateUser} = require("../controllers/userauthcontroller");
const express = require("express");
const router = express.Router();
const middleware = require('../middlewares/userauthmiddleware')

router
 .route('/updateUser/:id')
 .patch(userauthcontroller.updateUser)

router
.route("/register")
.post(userauthcontroller.register);

router
.route('/login')
.post(userauthcontroller.login)

router
 .route('/forgotPassword')
.post(middleware.isForget,userauthcontroller.forgetPassword)
  router
 .route('/resetPassword')
 .post(middleware.isReset,userauthcontroller.resetPassword)

 router
 .route('/logout')
 .get(userauthcontroller.logout)


router
 .route('/getAllUser')
 .get(userauthcontroller.getAllUser)

router
.route('/googleLogin')
.post(userauthcontroller.googleLogin)



 router
 .route('/deleteUser/:id')
 .delete(userauthcontroller.deleteUser)
module.exports=router
