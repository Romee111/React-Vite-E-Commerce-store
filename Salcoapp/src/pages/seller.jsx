 import React from 'react'
import '../styling/sellers.css';
import { Link,  useNavigate } from 'react-router-dom';

import SellerDetail from '../components/sellersdetail';
import res from '../assets/res.jpg'



 function Seller() {
   
   return (
     <div>
        
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
         
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={res} className="d-block w-100 sliding" alt="Sell here" />
          </div>
          
        
        </div>
     
      </div>
      <div className="sellers-heading">
        <ul>
          <h2>Welcome to Restorex – Your Ultimate Selling Partner!
          </h2>
          <p className='sellers'>Want to Sell with Restorex? <Link className='sellers-Link' style={{ textDecoration: 'underline',color: '#001f3f' }}
         to='/sellersSignup'>Sign Up Here!</Link></p>
</ul>
        <SellerDetail />
      </div>
      
       
     </div>
   )
 }
 
 export default Seller
 