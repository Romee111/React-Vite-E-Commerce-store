import React from 'react';

const LocationAddress = () => {
  return (
    <div className="container">
      <h2>Location Address</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter your city" />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" placeholder="Enter your state" />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">ZIP Code</label>
          <input type="text" className="form-control" id="zip" placeholder="Enter your ZIP code" />
        </div>
        <button type="submit" className="btn location-address-btn">Update Address</button>
      </form>
    </div>
  );
};

export default LocationAddress;
