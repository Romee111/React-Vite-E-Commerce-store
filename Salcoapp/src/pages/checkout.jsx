

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import '../styling/checkout.css';
import useOrder from '../hooks/orderhook';
import useProducts from '../hooks/producthooks';

const Checkout = () => {
    const { getOrders, createOrder } = useOrder();
    const { getDetailProduct } = useProducts();
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state.product || {};

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
        quantity: 1,
        size: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const incrementQuantity = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            quantity: prevFormData.quantity + 1
        }));
    };

    const decrementQuantity = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            quantity: Math.max(1, prevFormData.quantity - 1)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', formData);
        navigate('/order-confirmation');
    };

    if (!product) {
        return <div>No product data available</div>;
    }

    return (
        <div className="checkout-container mt-5">
            <div className="order-summary d-flex" style={{ justifyContent: 'center', marginTop: '20px' }}>
                <div className="summary-details">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: "#001F3F", textAlign: 'center' }}>Order Summary</h2>
                    <div className="item">
                        <img src={product.image} alt="Product" />
                        <div className="item-details">
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <p>Size: {product.size}</p>
                            <p>Rs: {product.price}</p>
                            <p>Qty: {formData.quantity}</p>
                            <p>Rs. {product.itemTotal}</p>
                        </div>
                    </div>
                    <div className="order-total">
                        <p>Items Total: Rs. {product?.itemTotal}</p>
                        <p>Delivery Fee: Rs. {product?.deliveryFee}</p>
                        <p><strong>Total Payment: Rs. {product?.totalPayment}</strong></p>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{ justifyContent: 'center', marginTop: '5%' }}>
                        <div className="col-12">
                            <div className="order-detail d-block">
                                <div className="personal-details">
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: "#001F3F", textAlign: 'center' }}>Personal Information</h2>
                                    <Form onSubmit={handleSubmit} className="personal-form">
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                className='Checkoutform'
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                className='Checkoutform'
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                className='Checkoutform'
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Phone No</Form.Label>
                                            <Form.Control
                                                type="number"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                className='Checkoutform'
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="payment-details">
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: "#001F3F", textAlign: 'center' }}>Payment Details</h2>
                                    <Form onSubmit={handleSubmit} className="checkout-form">
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Credit Card Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                id="cardNumber"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                required
                                                className='Checkoutform'
                                            />
                                        </Form.Group>
                                        <div className="form-row">
                                            <Form.Group className="form-group col-md-6">
                                                <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Expiration Date</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="expiration"
                                                    name="expiration"
                                                    style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                    value={formData.expiration}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group className="form-group col-md-6">
                                                <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>CVV</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="cvv"
                                                    name="cvv"
                                                    style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                    value={formData.cvv}
                                                    onChange={handleChange}
                                                    required
                                                    className='Checkoutform'
                                                />
                                            </Form.Group>
                                        </div>
                                        {/* <div className="quantity-control" style={{ textAlign: 'center', marginTop: '20px' }}>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F" }}>Quantity</Form.Label>
                                            <div>
                                                <Button onClick={decrementQuantity} style={{ marginRight: '10px' }}>-</Button>
                                                <span>{formData.quantity}</span>
                                                <Button onClick={incrementQuantity} style={{ marginLeft: '10px' }}>+</Button>
                                            </div>
                                        </div>
                                        <Form.Group>
                                            <Form.Label className='checkoutlabel' style={{ fontWeight: 'bold', color: "#001F3F", marginLeft: '10%', marginTop: '10px' }}>Size</Form.Label>
                                            <Form.Control
                                                as="select"
                                                id="size"
                                                name="size"
                                                value={formData.size}
                                                onChange={handleChange}
                                                required
                                                style={{ width: '80%', margin: 'auto', justifyContent: 'center', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                                className='Checkoutform'
                                            >
                                                <option value="">Select size</option>
                                                <option value="small">Small</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                            </Form.Control>
                                        </Form.Group> */}
                                        <button type="submit" className="btn" style={{ width: '30%', marginLeft: '65%', justifyContent: 'left', borderRadius: '10px', border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#001F3F', color: 'white' }}>Place Order</button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
