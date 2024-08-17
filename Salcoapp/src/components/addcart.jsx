import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/actions/cartaction';
import '../styling/addcart.css';

function AddCart({ show, handleClose }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(updateQuantity(id, 1));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity(id, -1));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    handleClose(); // Close modal on checkout
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>No items in the cart yet!</p>
        ) : (
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <div className="cart-item-quantity">
                    <Button
                      variant="secondary"
                      onClick={() => handleDecrement(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    {item.quantity}
                    <Button
                      variant="secondary"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </Button>
                  </div>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <Button
                  variant="link"
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="delete-button"
                >
                  <i className="bi-trash"></i> {/* Bootstrap Icons for trash */}
                </Button>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        
        <button   className='addcart-buy' onClick={handleCheckout}>
          Buy Now
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCart;
