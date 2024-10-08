import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, clearCart } from '../store/actions/cartaction'; // Import clearCart action
import '../styling/addcart.css';
import { useNavigate } from 'react-router-dom';

function AddCart({ show, handleClose }) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemoveFromCart = (_id) => {
        dispatch(removeFromCart(_id));
    };

    const handleIncrement = (_id) => {
        dispatch(updateQuantity(_id, 1));
    };

    const handleDecrement = (_id) => {
        dispatch(updateQuantity(_id, -1));
    };

    const handleCheckout = () => {
        // Navigate to order page with cart items
        navigate('/order', { state: { cartItems } });
        
        // Clear the cart after proceeding to the order page
        dispatch(clearCart());
        
        // Close the modal
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0 ? (
                    <p>No items in the cart yet!</p>
                ) : (
                    <div className="cart-items-container">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.name}</p>
                                    <div className="cart-item-quantity">
                                        <Button
                                            variant="secondary"
                                            onClick={() => handleDecrement(item._id)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </Button>
                                        {item.quantity}
                                        <Button
                                            variant="secondary"
                                            onClick={() => handleIncrement(item._id)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                </div>
                                <Button
                                    variant="link"
                                    onClick={() => handleRemoveFromCart(item._id)}
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
