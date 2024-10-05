import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Addcart from "../components/addcart";
import Brands from "../components/brandss";
import Signup from "../components/signup";
import ForgetPassword from "../components/forgetpassword";
import Seller from "../pages/seller";
import About from "../pages/about";
import TermConditions from "../pages/termconditions";
import ProductInventory from "../pages/productinventory";
import ProductDetail from "../pages/productdetail";
import Checkout from "../pages/checkout";
import SellersSignup from "../pages/sellersSignup";
import ListProduct from "../components/listsproduct";
import OrderPlace from "../pages/orderplace";
import ContactUs from "../pages/contactus";
import HelpSupport from "../pages/helpsupport";
import HelpCenter from "../pages/helpcenter";
import OrderTracking from '../components/ordertrack'
import PaymentOption from '../components/paymentoption'
import Profile from "../components/profile";
import RestorexWallet from "../components/restorexwallet";
import LocAddress from "../components/locadddress";
import More from "../components/more";
import ReturnsRefunds from "../components/returnsrefunds";
import RestorexBlogs from "../components/restorexblogs";
const RouterRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route  path='/forgetpassword' element={<ForgetPassword />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/about" element={<About />} />
            <Route path='/termconditions' element={<TermConditions />} />
            <Route path="/productinventory" element={<ProductInventory />} />
            <Route path='/productdetail/:Id' element={<ProductDetail  />} />
            <Route path="/addtocart/:id" element={<Addcart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<OrderPlace />} />
            <Route path="/sellersSignup" element={<SellersSignup />} />
            <Route path="/listProduct" element={<ListProduct />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="/help-center"  element={<HelpCenter />} />
            <Route path="/track-order" element={<OrderTracking />}></Route>
            <Route path="/payment-options" element={<PaymentOption />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/restorex-wallet" element={<RestorexWallet />}></Route>
            <Route path="/locaddress" element={<LocAddress />}></Route>
            <Route path="/more" element={<More />}></Route>
            <Route path='/returns-refunds' element={<ReturnsRefunds />}></Route>
            <Route path='/restorex-blogs' element={<RestorexBlogs />}></Route>
            <Route path='/Brands' element={<Brands />}></Route>
            
        </Routes>
      
    );
};
export default RouterRoutes;
            
