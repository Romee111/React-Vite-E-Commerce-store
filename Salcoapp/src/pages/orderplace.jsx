import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOrder from '../hooks/orderhook';  // Import the custom hook
import '../styling/orderplace.css';

const OrderPlace = () => {
    const location = useLocation();  // Retrieves the state passed from the previous page
    const cartItems = useSelector((state) => state.cart.cartItems);  // Assuming you need cart items, remove if unnecessary

    const { createOrder } = useOrder();  // Destructure createOrder from the custom hook

    // Initialize states for products, form data, and installments
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

    // Fetch product from location state
    useEffect(() => {
        if (location.state && location.state.product) {
            // Log product for debugging
            console.log('Product from previous page:', location.state.product);

            // Set products and installment information from location state
            setProducts([location.state.product]);
            setSelectedInstallment(location.state.product.selectedInstallment || '');
        }
    }, [location.state]);

    // Handle form data changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the product exists in the products array
        if (products.length === 0) {
            console.error("No products found in the order");
            return;
        }

        const product = products[0];  // Get the first product

        // Ensure the product ID is available
        if (!product._id) {
            console.error("Product ID is missing");
            return;
        }

        // Prepare order details
        const orderDetails = {
            user_id: 'user_id',  // Replace with actual user ID from state/auth context
            product_id: product._id,  // Product ID from product
            shipping_Address: formData,
            payment_Method: selectedInstallment ? 'Installment' : 'One-time',
            payment_Status: 'Pending',  // Update this based on the payment flow
            order_Status: 'Processing',  // Initial order status
            order_CreatedDate: new Date()
        };

        console.log("Order details being sent:", orderDetails);  // Log order details for debugging

        // Call createOrder to store the order in the database
        try {
            const orderResponse = await createOrder(
                orderDetails.user_id,
                orderDetails.product_id,
                orderDetails.shipping_Address,
                orderDetails.payment_Method,
                orderDetails.payment_Status,
                orderDetails.order_Status,
                orderDetails.order_CreatedDate
            );

            // Navigate to checkout after successful order creation
            if (orderResponse) {
                navigate('/checkout', { state: { products, formData, selectedInstallment } });
            }
        } catch (error) {
            console.error('Error placing the order', error);
        }
    };

    // Calculate installment amount based on total and months
    const calculateInstallmentAmount = (total, months) => {
        const interestRate = 0.05;  // Example interest rate
        const totalAmount = total * (1 + interestRate);
        return (totalAmount / months).toFixed(2);
    };

    // Get installment amount based on the selected option
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

    // Calculate total payment for all products
    const totalPayment = products.reduce((total, product) => total + product.price, 0);

    return (
        <div className="order-container mt-4">
            <div className="summary-details">
                <h2>Order Summary</h2>
                {products.map((product) => (
                    <div key={product._id} className="item">
                        <img src={product.images[0]} alt={product.name} className="order-image" />
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
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex">
                        <Form.Group controlId="formCity" className="mr-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="d-flex">
                        <Form.Group controlId="formPhone" className="mr-2">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formZip">
                            <Form.Label>ZIP Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your ZIP code"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: '#001F3F',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            marginTop: '10px'
                        }}
                    >
                        Proceed to Payment
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default OrderPlace;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Form, Button, Modal } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import useOrder from '../hooks/orderhook';  // Import the custom hook
// import '../styling/orderplace.css';

// const OrderPlace = () => {
//     const location = useLocation();  
//     const cartItems = useSelector((state) => state.cart.cartItems);  
//     const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Check login status
//     const { createOrder } = useOrder();  

//     const [products, setProducts] = useState([]);  
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         email: '',
//         city: '',
//         country: '',
//         phone: '',
//         zip: ''
//     });
//     const [selectedInstallment, setSelectedInstallment] = useState('');
//     const [showSignupModal, setShowSignupModal] = useState(false); // Modal state

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (location.state && location.state.product) {
//             setProducts([location.state.product]);
//             setSelectedInstallment(location.state.product.selectedInstallment || '');
//         }
//     }, [location.state]);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!isLoggedIn) {
//             setShowSignupModal(true); // Show signup modal if not logged in
//             return;
//         }

//         const product = products[0];  

//         if (!product._id) {
//             console.error("Product ID is missing");
//             return;
//         }

//         const orderDetails = {
//             user_id: 'user_id',  // Replace with actual user ID from state/auth context
//             product_id: product._id,  
//             shipping_Address: formData,
//             payment_Method: selectedInstallment ? 'Installment' : 'One-time',
//             payment_Status: 'Pending',  
//             order_Status: 'Processing',  
//             order_CreatedDate: new Date()
//         };

//         console.log("Order details being sent:", orderDetails);  

//         try {
//             const orderResponse = await createOrder(orderDetails);
//             if (orderResponse) {
//                 // Send email confirmation to the user
//                 await sendEmailConfirmation(orderDetails.user_id, orderResponse);
//                 navigate('/checkout', { state: { products, formData, selectedInstallment } });
//             }
//         } catch (error) {
//             console.error('Error placing the order', error);
//         }
//     };

//     const sendEmailConfirmation = async (userId, orderResponse) => {
//         // Your email sending logic here
//         // You might want to call an API endpoint that sends the email confirmation
//         console.log(`Sending email confirmation to userId: ${userId} for order:`, orderResponse);
//     };

//     const handleSignup = async () => {
//         // Logic to handle signup, e.g., sending data to your signup API
//         setShowSignupModal(false); // Close modal after signup
//         console.log("User signed up, proceed with order...");
//         // Proceed with placing the order after signup
//         await handleSubmit();
//     };

//     return (
//         <div className="order-container mt-4">
//             <div className="summary-details">
//                 <h2>Order Summary</h2>
//                 {products.map((product) => (
//                     <div key={product._id} className="item">
//                         <img src={product.images[0]} alt={product.name} className="order-image" />
//                         <div className="item-details">
//                             <h4>{product.name}</h4>
//                             <p>Quantity: {product.quantities}</p>
//                             <p>Size: {product.selectedSize}</p>
//                             <p>Color: {product.selectedColor}</p>
//                             <p>Price: ${(product.price * product.quantities).toFixed(2)}</p>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="order-total">
//                     <p>Total: <strong>${totalPayment.toFixed(2)}</strong></p>
//                 </div>
//             </div>
//             <div className="personal-details">
//                 <Button onClick={handleSubmit}>
//                     Proceed to Payment
//                 </Button>
//             </div>

//             {/* Signup Modal */}
//             <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Signup</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {/* Add your signup form here */}
//                     <Form onSubmit={handleSignup}>
//                         <Form.Group controlId="formSignupEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 name="email"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Form.Group>
//                         {/* Additional fields for signup can go here */}
//                         <Button type="submit">Signup</Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default OrderPlace;
