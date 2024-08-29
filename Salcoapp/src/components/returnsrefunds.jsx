import React from 'react';
import '../styling/returnsrefunds.css';
const ReturnsRefunds = () => {
  return (
    <div className="container">
      <h2>Returns & Refunds</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="orderNumber" className="form-label">Order Number</label>
          <input type="text" className="form-control" id="orderNumber" placeholder="Enter your order number" />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason for Return</label>
          <textarea className="form-control" id="reason" rows="3" placeholder="Describe the reason for return"></textarea>
        </div>
        <button type="submit" className="returns-click">Request Return</button>
      </form>
    </div>
  );
};

export default ReturnsRefunds;
