import React from 'react'
import '../styling/about.css'
import rec from '../assets/reslogo.png'
function about() {
  return (
<div style={{justifyContent:"center",alignItems:"center"}}>
        <h3 style={{textAlign:"center",marginTop:"2%"}}>About Restorex</h3>
        <p style={{ textAlign:"left",marginLeft:"5%",marginRight:"5%"}}>
        Welcome to our Restorex Store, where shopping meets convenience and quality! If you're looking for an online shopping experience like no other, you've come to the right place. Dive into a world of endless possibilities with us as we introduce you to who we are, what we offer, and why we stand out in the digital marketplace. Get ready to discover a seamless shopping experience tailored just for you!
        </p>
        <h6 style={{textAlign:"left",marginTop:"2%",marginLeft:"5%"}}>About Us </h6>
        <p style={{ textAlign:"left",marginLeft:"5%",marginRight:"5%"}}>
        At our Restorex store, we are more than just a platform to shop - we are a destination for curated collections and personalized experiences. Our mission is to redefine the online shopping landscape by offering a diverse range of products that cater to every taste and need.
           We pride ourselves on creating a seamless and user-friendly interface that enhances your shopping journey from start to finish. With a team dedicated to ensuring customer satisfaction, we strive to provide top-notch service with every click and purchase.
               Our commitment to quality shines through in our handpicked selection of products sourced from reputable vendors worldwide. From fashion essentials to home decor must-haves, we have something for everyone.
               <br />
               Join us on this exciting shopping adventure where innovation meets convenience, and let's elevate your online shopping experience together!
         </p>

         <h6  className='about-who'> Who we are: </h6>
          <div className="about-CEO d-flex row">
            <div className="about-img col-md-4 " >
                    <img src={rec} className="about-img" style={{marginTop:"5%"}} alt="" srcset="" />
            </div>
            <div className="about-para col-md-8">
            <p style={{ textAlign:"",marginLeft:"10%",}}>
            Restorex is a dynamic e-commerce site founded by Sohaib Romee, an innovative entrepreneur with a passion for delivering top-notch products to our customers. Our team is dedicated to providing excellent customer service and ensuring that your online shopping experience with us is seamless and enjoyable. At Restorex, our mission is to offer a diverse range of high-quality products that cater to all your needs, with a focus on quality, convenience, and customer satisfaction. Restorex pride ourselves on our extensive selection of products, including fashion and beauty essentials, home decor, and electronics. Whether you're looking to stay stylish, transform your living space, or discover the latest gadgets, Restorex have something for everyone.

            At our core, Restorex value transparency, integrity, and trust. Restorex believe in building long-lasting relationships with our customers based on mutual respect and understanding. Clear and honest communication, upholding the highest standards in all our interactions, and ensuring that our customers can rely on us for quality and service are fundamental to our business. When you shop with us, you can trust that you are not just another transaction – you are part of the family. Restorex are committed to exceptional customer service, quality assurance, and convenient shopping. Our dedicated support team is here to assist you with any queries or concerns, and we ensure that every product listed on our site meets our high standards of quality. Easy navigation, secure payment options, and swift delivery make your shopping experience seamless.

             Restorex invite you to join us on this exciting shopping journey. As we continue to grow and expand our offerings, Restorex remain committed to providing you with the best online shopping experience possible. Thank you for choosing Restorex as your go-to online shopping destination!


         </p>
      
            </div>
                                 
          </div>
    </div>
  )
}

export default about
