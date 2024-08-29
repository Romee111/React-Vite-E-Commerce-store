import React, { useState } from 'react';
import '../styling/contacticon.css'; // CSS file for styling

function ContactIcon() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`contact-icon-container ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="contact-icon-button" onClick={toggleVisibility}>
        <i className="bi bi-telephone" style={{ fontSize: '10px',color:"white" }}></i>
      </button>
      {isVisible && (
        <div className="contact-icon-info">
          <p>reach us</p>
          {/* Add your contact information or a link here */}
        </div>
      )}
    </div>
  );
}

export default ContactIcon;
