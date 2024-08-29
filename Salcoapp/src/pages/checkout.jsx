import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePayment from '../hooks/paymenthook';
import axios from 'axios';
import '../styling/checkout.css'; // Import the CSS file

const CheckoutPage = () => {
    const { orderId } = useParams(); // Get the order ID from the URL
    const { createPayment } = usePayment();
    const [orderDetails, setOrderDetails] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({
        paymentMethod: 'klarna', // Default payment method
        installmentPlan: '', // Chosen installment plan
        isCOD: false,
        bankDetails: {
            cardNumber: '',
            cardExpiry: '',
            cardCVV: '',
            bankName: ''
        }
    });

    useEffect(() => {
        // Fetch order details using the order ID
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:2900/orders/${orderId}`);
                setOrderDetails(response.data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    const handleBankDetailsChange = (e) => {
        setPaymentDetails({
            ...paymentDetails,
            bankDetails: {
                ...paymentDetails.bankDetails,
                [e.target.name]: e.target.value
            }
        });
    };

    const handlePayment = async () => {
        const bin = paymentDetails.bankDetails.cardNumber.slice(0, 6);
        const country = await getCountryFromBin(bin);

        // Check if Klarna is available
        const isKlarnaAvailable = checkKlarnaAvailability(country);

        if (paymentDetails.paymentMethod === 'klarna' && isKlarnaAvailable) {
            // Proceed with Klarna installments
            const data = await createPayment({ ...paymentDetails, orderId });
            console.log("Payment successful with Klarna:", data);
        } else if (paymentDetails.paymentMethod === 'klarna' && !isKlarnaAvailable) {
            // Klarna not available, suggest alternatives
            alert('Klarna is not available in your region. Please use another payment method such as Raast ID or bank cards.');
        } else {
            // Proceed with other payment methods
            const data = await createPayment({ ...paymentDetails, orderId });
            console.log("Payment successful:", data);
        }
    };

    const getCountryFromBin = async (bin) => {
        // Logic to determine the country based on the BIN
        // For now, let's assume a mock implementation:

        const binCountryMap = {
            '411111': 'US',
            '511111': 'UK',
            '611111': 'DE',
            '711111': 'IN', // Example BINs
        };

        return binCountryMap[bin] || 'Unknown';
    };

    const checkKlarnaAvailability = (country) => {
        const klarnaCountries = ['US', 'UK', 'SE', 'DE']; // List of countries where Klarna is available
        return klarnaCountries.includes(country);
    };

    if (!orderDetails) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="checkout-container">
            <h1>Checkout Page</h1>
            <div className="order-info">
                <p>Order ID: {orderId}</p>
                <p>Total Amount: {orderDetails.amount}</p>
            </div>
            <div className="payment-form">
                <input 
                    type="text" 
                    name="cardNumber" 
                    placeholder="Card Number" 
                    onChange={handleBankDetailsChange}
                    className="form-input"
                />
                <input 
                    type="text" 
                    name="cardExpiry" 
                    placeholder="Card Expiry (MM/YY)" 
                    onChange={handleBankDetailsChange}
                    className="form-input"
                />
                <input 
                    type="text" 
                    name="cardCVV" 
                    placeholder="Card CVV" 
                    onChange={handleBankDetailsChange}
                    className="form-input"
                />
                <input 
                    type="text" 
                    name="bankName" 
                    placeholder="Bank Name" 
                    onChange={handleBankDetailsChange}
                    className="form-input"
                />
                <button onClick={handlePayment} className="submit-button">Pay Now</button>
            </div>
        </div>
    );
};

export default CheckoutPage;
