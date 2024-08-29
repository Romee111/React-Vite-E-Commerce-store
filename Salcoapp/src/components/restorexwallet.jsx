import React, { useState } from 'react';
import AddFundsModal from '../components/addwallet'; // Import the modal component
import '../styling/restorexwallet.css'; // Import the CSS file for styling

const RestorexWallet = () => {
  const [modalShow, setModalShow] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const handleAddFunds = (amount) => {
    setBalance(prevBalance => prevBalance + parseFloat(amount));
  };

  return (
    <div className="wallet-container">
      <h2>Restorex Wallet</h2>
      <div className="wallet-content">
        <div className="wallet-info">
          <p>
            Welcome to Restorex Wallet! Manage your balance, view transaction history, and perform various actions all in one place.
          </p>
          <div className="wallet-balance">
            <h3>Current Balance</h3>
            <p>${balance.toFixed(2)}</p>
          </div>
          <button className="wallet-btn" onClick={handleShow}>Add Funds</button>
          <button className="wallet-btn">Withdraw Funds</button>
        </div>
      </div>

      {/* AddFundsModal Component */}
      <AddFundsModal
        show={modalShow}
        onHide={handleClose}
        onAddFunds={handleAddFunds}
      />
    </div>
  );
};

export default RestorexWallet;
