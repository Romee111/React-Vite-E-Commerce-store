import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styling/checkout.css';
import  useOrder from '../hooks/orderhook';

const Checkout = () => {
    const { getOrders, createOrder } = useOrder();
    const {id} = useParams();
    
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
     alert("my name is kajoo")   
            const fetchOrderProduct = async () => {
                try {
                    debugger
                    const data = await getOrders(id);
                    debugger
                    setOrderSummary(data);
                    console.log(data,"sohaib");

                    // You can set form data here if needed, e.g., setFormData({...});
                } catch (error) {
                    console.error("Error fetching order summary", error);
                }
            };
            fetchOrderProduct();
        }
    , [id, getOrders]);

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

    return (
        <div className="checkout-container">
            <div className="order-summary">
                <h2>Order Summary</h2>
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
