import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Help Center</h2>
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <Link to="/track-order" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-truck"></i>
              <h5>Order Tracking</h5>
              <p>Track your orders easily.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/payment-options" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-credit-card"></i>
              <h5>Payment Options</h5>
              <p>Explore our various payment methods.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/profile" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-person"></i>
              <h5>Profile</h5>
              <p>Manage your personal details.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/reset-password" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-lock"></i>
              <h5>Reset Password</h5>
              <p>Change or recover your password.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/restorex-wallet" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-wallet"></i>
              <h5>Restorex Wallet</h5>
              <p>Manage your wallet balance.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/location-address" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-geo-alt"></i>
              <h5>Location Address</h5>
              <p>Update your address details.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/returns-refunds" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-arrow-left-right"></i>
              <h5>Returns & Refunds</h5>
              <p>Request returns and refunds.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 mb-4">
          <Link to="/more" className="text-decoration-none text-dark">
            <div className="icon-card">
              <i className="bi bi-info-circle"></i>
              <h5>More</h5>
              <p>Additional support and info.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
