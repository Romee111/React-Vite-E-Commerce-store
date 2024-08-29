import React, { useState } from 'react';
import '../styling/paymentoption.css';

const PaymentOptions = () => {
  const [selectedBank, setSelectedBank] = useState('Select a bank');

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
    <div className="container">
      <h2 className="main-heading">Payment Options</h2>
      <ul className="list-unstyled payment-options-list" style={{alignItems: 'left'}}>
        <li className="payment-option">
          <i className="bi bi-credit-card"></i> Credit/Debit Cards
        </li>
        <li className="payment-option">
          <i className="bi bi-bank"></i> Bank Transfers
          <div className="dropdown mt-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
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
        </li>
        <li className="payment-option">
          <i className="bi bi-wallet"></i> Restorex Wallet
        </li>
        <li className="payment-option">
          <i className="bi bi-paypal"></i> PayPal
        </li>
        <li className="payment-option">
          <i className="bi bi-credit-card"></i> Klarna
        </li>
        <li className="payment-option">
          <i className="bi bi-credit-card"></i> Raast_ID
        </li>
      </ul>
    </div>
  );
};

export default PaymentOptions;
