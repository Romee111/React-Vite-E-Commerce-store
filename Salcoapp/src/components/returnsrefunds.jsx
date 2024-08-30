import React from 'react';
import '../styling/returnsrefunds.css';
const ReturnsRefunds = () => {
  return (
    <div className="returns-wrapper">
    <div className="returns-container">
      <h2 className="returns-title">Returns & Refunds</h2>
      <form className="returns-form">
        <label htmlFor="orderNumber" className="form-label-return">Order Number</label>
        <input type="text" className="form-control-return" id="orderNumber" placeholder="Enter your order number" />
        
        <label htmlFor="reason" className="form-label-return">Reason for Return</label>
        <textarea className="form-control-return" id="reason" rows="3" placeholder="Describe the reason for return"></textarea>
        
        <button type="submit" className="returns-click">Request Return</button>
      </form>
    </div>
  </div>
  
  );
};

export default ReturnsRefunds;
