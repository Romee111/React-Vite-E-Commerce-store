import React, { useState } from 'react';
import '../styling/paymentoption.css';

const PaymentOptions = () => {
  const [selectedBank, setSelectedBank] = useState('See banks');

  const banks = [
    "Habib Bank Limited (HBL)",
    "National Bank of Pakistan (NBP)",
    "United Bank Limited (UBL)",
    "Standard Chartered Bank (Pakistan)",
    "MCB Bank Limited",
    "Bank Alfalah",
    "Faysal Bank",
    "PICIC",
    "Bank Islami",
    "Dubai Islamic Bank Pakistan",
    "Al Baraka Bank",
    "Summit Bank",
    "First Women Bank Limited",
    "JS Bank",
    "The Bank of Punjab (BoP)",
    "Silkbank",
    "Citibank Pakistan",
    "Pak Oman Investment Company",
    "Pak Libya Holding Company",
    "Pak Brunei Investment Company"
  ];

  return (
    <div className="PaymentOptions-container">
      <h2 className="PaymentOptions-main-heading">Payment Options</h2>
      
      <div className="PaymentOptions-flex-container">
        <ul className="PaymentOptions-list">
          <li className="PaymentOptions-option">
            <i className="bi bi-credit-card"></i>
            <div>
              <span>Credit/Debit Cards</span>
              <p>Use your credit or debit card for secure and instant payments. All major cards are accepted.</p>
            </div>
          </li>
          <li className="PaymentOptions-option">
            <i className="bi bi-bank"></i>
            <div>
              <span>Bank Transfers</span>
              <p>Transfer funds directly from your bank account. Choose from a list of supported banks.</p>
              <div className="PaymentOptions-dropdown mt-2">
                <button
                  className="btn  PaymentOptions-dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: '#001F3F',color : '#FFFFFF',borderColor: '#FFFFFF' }}
                >
                  {selectedBank}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {banks.map((bank, index) => (
                    <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => setSelectedBank(bank)}
                      >
                        {bank}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="PaymentOptions-option">
            <i className="bi bi-wallet"></i>
            <div>
              <span>Restorex Wallet</span>
              <p>Quick and easy payments with your Restorex Wallet balance. Manage your funds effortlessly.</p>
            </div>
          </li>
        </ul>

        <ul className="PaymentOptions-list">
          <li className="PaymentOptions-option">
            <i className="bi bi-paypal"></i>
            <div>
              <span>PayPal</span>
              <p>Pay securely using your PayPal account. Ideal for international transactions.</p>
            </div>
          </li>
          <li className="PaymentOptions-option">
            <i className="bi bi-credit-card"></i>
            <div>
              <span>Klarna</span>
              <p>Split your purchase into easy installments with Klarna. Flexible payment plans available.</p>
            </div>
          </li>
          <li className="PaymentOptions-option">
            <i className="bi bi-credit-card"></i>
            <div>
              <span>Raast_ID</span>
              <p>Use Raast ID for instant and secure payments, specifically designed for local transactions.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentOptions;
