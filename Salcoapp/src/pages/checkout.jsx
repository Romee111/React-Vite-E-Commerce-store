import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/checkout.css';
import useOrder from '../hooks/orderhook';
import useProducts from '../hooks/producthooks';
const Checkout = () => {
    const { getOrders, createOrder } = useOrder();
    const {getDetailProduct} = useProducts();
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};

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
    });

    const [orderSummary, setOrderSummary] = useState(null);

    useEffect(() => {
        const fetchOrderProduct = async () => {
            try {
                debugger
                if (product) {
                    const data = await getDetailProduct({product_id:product._id});
                    console.log(data);
                    debugger
                    setOrderSummary(data);
                }
            } catch (error) {
                console.error("Error fetching order summary", error);
            }
        };
        fetchOrderProduct();
    }, [product, getOrders]);

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

    if (!product) {
        return <div>No product data available</div>;
    }

    return (
        <div className="checkout-container">
            <div className="order-summary">
                <h2>Order Summary</h2>
                {orderSummary ? (
                    <div className="summary-details">
                        {orderSummary.items.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.image} alt="Product" />
                                <div className="item-details">
                                    <h4>{item.productName}</h4>
                                    <p>{item.productDescription}</p>
                                    <p>Qty: {item.quantity}</p>
                                    <p>Rs. {item.itemTotal}</p>
                                </div>
                            </div>
                        ))}
                        <div className="delivery">
                            <p>{orderSummary.deliveryMethod} | Rs. {orderSummary.deliveryFee}</p>
                            <p>Receive by {orderSummary.deliveryEstimate}</p>
                        </div>
                        <div className="voucher">
                            <button className="btn">Get Voucher</button>
                        </div>
                        <div className="order-total">
                            <p>Items Total: Rs. {orderSummary.itemTotal}</p>
                            <p>Delivery Fee: Rs. {orderSummary.deliveryFee}</p>
                            <p><strong>Total Payment: Rs. {orderSummary.totalPayment}</strong></p>
                        </div>
                    </div>
                ) : (
                    <p>Loading order summary...</p>
                )}
            </div>
            <div className="personal-details">
                <h2>Personal Information</h2>
                <form className="personal-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="zip">Zip</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="payment-details">
                <h2>Payment Details</h2>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="cardNumber">Credit Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiration">Expiration Date</label>
                            <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
