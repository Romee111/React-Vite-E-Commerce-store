import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/actions/cartaction';
import '../styling/addcart.css';
import useCart from '../hooks/carthook';

function AddCart({ show, handleClose }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const { addCart, removeCart } = useCart();

  const handleRemoveFromCart = (id) => {
    removeCart(id) // Call the API to remove the item
      .then(() => {
        dispatch(removeFromCart(id)); // Update Redux state after successful removal
      })
      .catch((error) => console.error('Error removing item from cart:', error));
  };

  const handleIncrement = (id) => {
    dispatch(updateQuantity(id, 1)); // Update quantity in the Redux store
    // You might want to call an API here if you need to sync the quantity update with the backend
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity(id, -1)); // Update quantity in the Redux store
    // You might want to call an API here if you need to sync the quantity update with the backend
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
        <button className="addcart-buy" onClick={handleCheckout}>
          Buy Now
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCart;
