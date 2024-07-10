import React from 'react'
import '../styling/sellersdetail.css'
import sell from '../assets/selle.jpg'
export default function SellerDetail() {
  return (
    <div>
        <p className='join-sellers'> 
      Join our thriving community of successful sellers and take your business to the next level with Restorex. Here's why selling on Restorex is the best decision for your business:
      </p>
      <div className="howsell">
        <h3>How to sell</h3>
        <p className="sellpara">
        Welcome to Restorex, your trusted e-commerce platform. Selling on Restorex offers numerous benefits, including access to a vast customer base, advanced selling tools, and dedicated support to help you succeed.
        </p>
        </div>
        <div className="restorexselling">
          <h3>what to know</h3>
                   <ul className='sellpara'>      
                <h6>  Enhanced Visibility</h6>
               <li className='sellparagraph'>Boost Your Reach: Our platform provides high visibility for your products, ensuring they reach a wide audience of potential buyers.
              </li>
              <h6> Advanced Tools</h6>
               <li className='sellparagraph'>Grow Your Sales: Utilize our state-of-the-art selling tools, from advanced analytics to promotional features, to maximize your sales and business growth.
               No Selling Fees.
              </li>
              <h6>No Selling Fees</h6>
               <li className='sellparagraph'>Keep All Your Profits: Enjoy the benefit of selling your products on Restorex with no transaction fees. Every penny you earn is yours to keep.
               Priority Support
              </li>
              <h6>Priority Support</h6>
               <li className='sellparagraph'>We’re Here for You: Access our dedicated priority support team to quickly resolve any issues and get back to selling without delays.
               Community and Training
              </li>
              <h6>Community and Training</h6>
               <li className='sellparagraph'>
               Learn and Connect: Join exclusive training sessions and webinars, and connect with other sellers to share tips and strategies for success.
              </li>
               </ul>
                      </div>
        <div className="stepselling">
          <h3>Way to Easy Selling</h3>
            <div className="stepsell">
            <ul>
            <h6>Create Your Account</h6>
            <li className='sellparagraph'>Sign up quickly and easily on Restorex.</li>
            <h6>Choose Premium Membership</h6>
            <li className='sellparagraph'>Unlock exclusive features with our Premium Membership.</li>
            <h6>List Your Products</h6>
            <li className='sellparagraph'> Add your products with high-quality images and detailed descriptions.</li>
            <h6>Start Selling</h6>
            <li className='sellparagraph'>Reach thousands of customers and grow your business!</li>
        
              
          </ul>

           <div className="sell-img">
             <img src={sell} alt="Sell here"  className='img-fluid'/>
           </div>
            </div>

              
        </div>
        <h6 className='sellheading'>  Ready to sell</h6>
        <p className='sellparagraph1'>Take advantage of all the benefits Restorex has to offer. Join our community of successful sellers today and watch your business flourish!</p>   
      
    </div>
  )
}



