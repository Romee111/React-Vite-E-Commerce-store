import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styling/orderplace.css';

const OrderPlace = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (location.state && location.state.product) {
            setProducts([location.state.product]);
        } else if (cartItems.length > 0) {
            setProducts(cartItems);
        }
    }, [location.state, cartItems]);

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', formData);
        navigate('/order-confirmation');
    };

    if (products.length === 0) {
        return <div>No product data available</div>;
    }

    const totalPayment = products.reduce((total, product) => {
        return total + product.price * product.quantities;
    }, 0);

    return (
        <div className="order-container mt-4">
            <div className="summary-details">
                <h2>Order Summary</h2>
                {products.map((product) => (
                    <div key={product._id} className="item">
                        <img src={product.images[0]} alt={product.name} className="order-image" />
                        <div className="item-details">
                            <h4>{product.name}</h4>
                            <p>Size: {product.selectedSize}</p>
                            <p>Color: {product.selectedColor}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <div className="order-total">
                    <p>Total: <strong>${totalPayment.toFixed(2)}</strong></p>
                </div>
            </div>
            <div className="personal-details" style={{width: '500%' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address" name="address" value={formData.address} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <div className="flex-container">
                       
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter your city" name="city" value={formData.city} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter your country" name="country" value={formData.country} onChange={handleChange} required />
                        </Form.Group>
                    </div>
                    <div className="flex-container">
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>ZIP Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter your ZIP code" name="zip" value={formData.zip} onChange={handleChange} required />
                        </Form.Group>
                    </div>
                  
                    <Button variant="primary" type="submit" style={{backgroundColor: '#001F3F', color: 'white', 
                        border: 'none', borderRadius: '10px', marginTop: '10px'
                    }}>Place Order</Button>
                </Form>
            </div>
        </div>
    );
};

export default OrderPlace;
