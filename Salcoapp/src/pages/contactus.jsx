import React from 'react'
import '../styling/contactus.css'
function contactus() {
  return (
    <div>
            <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="intro-paragraph">
        At Restorex, we value every customer and strive to provide exceptional support. Whether you have a question, need assistance, or want to provide feedback, we're here to help. Reach out to us using the contact details below, and our dedicated team will respond promptly.
      </p>
      <div className="contact-info">
        <div className="contact-detail">
          <i className="bi bi-envelope"></i>
          <a href="mailto:support@restorex.com">support@restorex.com</a>
        </div>
        <div className="contact-detail">
          <i className="bi bi-phone"></i>
          <p>+92 318-7101450</p>
        </div>
        <div className="contact-detail">
          <i className="bi bi-globe"></i>
          <p>UAN for Pakistan</p>
        </div>
        <p className="closing-paragraph">
          For any specific queries related to our services, feel free to send us an email, and our support team will ensure your concerns are addressed swiftly. We look forward to hearing from you and appreciate your trust in Restorex.
        </p>
      </div>
    </div>

      
    </div>
  )
}

export default contactus
