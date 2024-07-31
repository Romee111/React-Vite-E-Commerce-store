import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Addcart from "../components/addcart";
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
            <Route path="/sellersSignup" element={<SellersSignup />} />
            <Route path="/listProduct" element={<ListProduct />} />
        </Routes>
      
    );
};
export default RouterRoutes;
            
