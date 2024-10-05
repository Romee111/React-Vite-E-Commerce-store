import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styling/orderplace.css';

const OrderPlace = () => {
    const location = useLocation();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        city: '',
        country: '',
        phone: '',
        zip: ''
    });
    const [selectedInstallment, setSelectedInstallment] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.product) {
            setProducts([location.state.product]);
            setSelectedInstallment(location.state.product.selectedInstallment || '');
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        handleOrder();
    };

    const handleOrder = () => {
        navigate('/checkout', { state: { products, formData, selectedInstallment } });
    };

    const calculateInstallmentAmount = (total, months) => {
        const interestRate = 0.05; // Example interest rate
        const totalAmount = total * (1 + interestRate);
        return (totalAmount / months).toFixed(2);
    };

    const getInstallmentAmount = () => {
        switch (selectedInstallment) {
            case '3m':
                return calculateInstallmentAmount(products[0].price, 3);
            case '6m':
                return calculateInstallmentAmount(products[0].price, 6);
            default:
                return 0;
        }
    };

    const totalPayment = products.reduce((total, product) => total + product.price, 0);

    return (
        <div className="order-container mt-4">
            <div className="summary-details">
                <h2>Order Summary</h2>
                {products.map((product) => (
                    <div key={product._id} className="item">
                        <img src={product.image} alt={product.name} className="order-image" />
                        <div className="item-details">
                            <h4>{product.name}</h4>
                            <p>Quantity: {product.quantities}</p>
                            <p>Size: {product.selectedSize}</p>
                            <p>Color: {product.selectedColor}</p>
                            <p>Price: ${(product.price * product.quantities).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <div className="order-total">
                    <p>Total: <strong>${totalPayment.toFixed(2)}</strong></p>
                    {selectedInstallment && (
                        <p>Installment Amount ({selectedInstallment}): <strong>${getInstallmentAmount()}</strong></p>
                    )}
                </div>
            </div>
            <div className="personal-details">
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
                    <div className="d-flex">
                        <Form.Group controlId="formCity" className="mr-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter your city" name="city" value={formData.city} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter your country" name="country" value={formData.country} onChange={handleChange} required />
                        </Form.Group>
                    </div>
                    <div className="d-flex">
                        <Form.Group controlId="formPhone" className="mr-2">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>ZIP Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter your ZIP code" name="zip" value={formData.zip} onChange={handleChange} required />
                        </Form.Group>
                    </div>
                    <Button  type="submit" style={{ backgroundColor: '#001F3F', color: 'white', border: 'none', borderRadius: '10px', marginTop: '10px' }}>
                        Proceed to Payment
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default OrderPlace;
