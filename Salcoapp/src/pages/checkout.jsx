import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePayment from '../hooks/paymenthook';
import '../styling/checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { products } = location.state || {}; // Retrieve products from location.state
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [installmentPlan, setInstallmentPlan] = useState(false);
  const [isCOD, setIsCOD] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showInstallmentsOption, setShowInstallmentsOption] = useState(false);
  const [showRaastDetails, setShowRaastDetails] = useState(false);
  const [additionalText, setAdditionalText] = useState(''); // New state for additional text
  const { createPayment } = usePayment();

  const amount = products.reduce((total, product) => total + product.price * product.quantities, 0);
  const currency = 'USD'; // Replace with actual currency if dynamic

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setIsCOD(method === 'cod');
    if (method === 'card') {
      setShowCardDetails(true);
      checkInstallmentsAvailability();
      setAdditionalText('Enter your card details below.');
    } else if (method === 'raast_id') {
      setShowCardDetails(false);
      setShowRaastDetails(true);
      setAdditionalText('Enter your Raast ID below.');
    } else if (method === 'cod') {
      setShowCardDetails(false);
      setShowRaastDetails(false);
      setAdditionalText('Payment will be collected at delivery.');
    }
  };

  const checkInstallmentsAvailability = async () => {
    try {
      const response = await fetch('/api/check-installments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency }),
      });
      const data = await response.json();
      setShowInstallmentsOption(data.isInstallmentsAvailable);
    } catch (error) {
      console.error('Error checking installments availability:', error);
      setShowInstallmentsOption(false);
    }
  };

  const handleInstallmentPlanChange = (e) => {
    setInstallmentPlan(e.target.checked);
  };

  const handlePayment = async () => {
    try {
      const paymentDetails = {
        paymentMethod,
        installmentPlan,
        isCOD,
        products,
        amount,
        currency,
      };

      const response = await createPayment(paymentDetails);
      setClientSecret(response.clientSecret);

      console.log('Client Secret:', clientSecret);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="checkout-pay-container">
      <div className="checkout-pay-order-summary">
        <h2>Order Payment</h2>
        <div className="checkout-pay-order-amount">
          <strong>Amount:</strong> {currency} {amount}
        </div>
      </div>

      <div className="checkout-pay-component">
        <h2>Select Payment Method</h2>
        <div className="checkout-pay-options">
          <div className={`checkout-pay-box ${paymentMethod === 'card' ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange('card')}>
            <i className="bi bi-credit-card" size={24} style={{ color: 'white' }} ></i>
            <div className="checkout-pay-label" style={{ color: 'white' }}>Credit/Debit Card</div>
          </div>
          <div className={`checkout-pay-box ${paymentMethod === 'raast_id' ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange('raast_id')}>
            <i className="bi bi-bank" size={24} style={{ color: 'white' }} ></i>
            <div className="checkout-pay-label" style={{ color: 'white' }}>Raast ID</div>
          </div>
          <div className={`checkout-pay-box ${paymentMethod === 'cod' ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange('cod')}>
            <i className="bi bi-box-arrow-down" size={24} style={{ color: 'white' }} ></i>
            <div className="checkout-pay-label" style={{ color: 'white' }}>Cash on Delivery (COD)</div>
          </div>
        </div>

        <div className="checkout-pay-additional-text">
          {additionalText}
        </div>

        {showCardDetails && (
          <div className="checkout-pay-card-details">
            <h3>Enter Card Details</h3>
            <input type="text" placeholder="Card Number" className="checkout-pay-input" />
            <input type="text" placeholder="Cardholder Name" className="checkout-pay-input" />
            <div className="checkout-pay-card-extra">
              <input type="text" style={{ width: '20%' }} placeholder="Expiration Date" className="checkout-pay-input-small" />
              <input type="text" placeholder="CVV" className="checkout-pay-input-small" />
            </div>

            {showInstallmentsOption && (
              <div className="checkout-pay-installment-option">
                <label>
                  <input
                    type="checkbox"
                    checked={installmentPlan}
                    onChange={handleInstallmentPlanChange}
                  />
                  Enable Installments
                </label>
              </div>
            )}
          </div>
        )}

        {showRaastDetails && (
          <div className="checkout-pay-raast-details">
            <h3>Enter Raast ID</h3>
            <input type="text" placeholder="Raast ID" className="checkout-pay-input" />
          </div>
        )}

        <button className="checkout-pay-button" onClick={handlePayment}>Make Payment</button>

        {clientSecret && (
          <div className="checkout-pay-response">
            <p>Payment initiated. Use the client secret to confirm the payment: {clientSecret}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
