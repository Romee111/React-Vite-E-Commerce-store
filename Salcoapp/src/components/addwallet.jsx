import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../styling/addwallet.css'; // Import the custom CSS file

const AddFundsModal = ({ show, onHide, onAddFunds }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank'); // Default to bank method
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;
      case 'paymentMethod':
        setPaymentMethod(value);
        break;
      case 'bankName':
        setBankName(value);
        break;
      case 'accountName':
        setAccountName(value);
        break;
      case 'accountHolderName':
        setAccountHolderName(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the amount and payment method details to the parent component
    onAddFunds({
      amount,
      paymentMethod,
      bankName,
      accountName,
      accountHolderName,
      cvv,
      expiryDate
    });
    setAmount(''); // Clear input fields
    setBankName('');
    setAccountName('');
    setAccountHolderName('');
    setCvv('');
    setExpiryDate('');
    onHide(); // Close the modal
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add-wallet-modal"
      style={{width: '400px',alignItems: 'center'}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Funds
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
              placeholder="Enter amount to add"
              required
              className="wallet-input"
            />
          </Form.Group>

          <Form.Group controlId="formPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              name="paymentMethod"
              value={paymentMethod}
              onChange={handleChange}
              required
              className="wallet-input"
            >
              <option value="bank">Bank Transfer</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          {paymentMethod === 'bank' && (
            <>
              <Form.Group controlId="formBankName">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bankName"
                  value={bankName}
                  onChange={handleChange}
                  placeholder="Enter your bank name"
                  required
                  className="wallet-input"
                />
              </Form.Group>

              <Form.Group controlId="formAccountName">
                <Form.Label>Account Name</Form.Label>
                <Form.Control
                  type="text"
                  name="accountName"
                  value={accountName}
                  onChange={handleChange}
                  placeholder="Enter your account name"
                  required
                  className="wallet-input"
                />
              </Form.Group>

              <Form.Group controlId="formAccountHolderName">
                <Form.Label>Account Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="accountHolderName"
                  value={accountHolderName}
                  onChange={handleChange}
                  placeholder="Enter account holder's name"
                  required
                  className="wallet-input"
                />
              </Form.Group>
            </>
          )}

          {paymentMethod === 'card' && (
            <>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  placeholder="Enter card number"
                  required
                  className="wallet-input"
                />
              </Form.Group>

              <Form.Group controlId="formCvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  name="cvv"
                  value={cvv}
                  onChange={handleChange}
                  placeholder="Enter CVV"
                  required
                  className="wallet-input"
                />
              </Form.Group>

              <Form.Group controlId="formExpiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  className="wallet-input"
                />
              </Form.Group>
            </>
          )}

          {/* Additional fields for other payment methods can be added here */}

          <Button type="submit" className='add-funds-btn' style={{backgroundColor: '#001f3f', color: 'white', }}>Add Funds</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddFundsModal;
