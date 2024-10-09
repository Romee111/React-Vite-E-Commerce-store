import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'; // UI components from Bootstrap
import { useAuth } from '../hooks/userauthhooks'; // Custom hook for handling authentication
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { Link } from 'react-router-dom';
import UserProfile from '../components/userprofile'; // Modal for showing user profile after login
import '../styling/login.css'; // Custom CSS for the login component

function Login({ show, handleClose }) {
    // Local state management
    const [email, setEmail] = useState(''); // To store the email input
    const [password, setPassword] = useState(''); // To store the password input
    const [error, setError] = useState(''); // To store any login errors
    const { loginApi, setUser } = useAuth(); // Access loginApi and setUser function from custom hook
    const navigate = useNavigate(); // For navigation based on user role
    const [showProfile, setShowProfile] = useState(false); // State to control the user profile modal

    // Handle form submission and login process
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setError(''); // Reset any previous errors

        // Check if both email and password are entered
        if (!email || !password) {
            setError('Please enter email and password');
            return;
        }

        try {
            // Call loginApi with email and password, which sends credentials to backend
            const user = await loginApi(email, password);

            // If the login is successful, store user data
            setUser(user);
            handleClose(); // Close the login modal after successful login

            // Navigate or perform actions based on user role
            if (user.isAdmin) {
                window.location.href = 'http://localhost:5174/admin'; // Redirect admin to admin dashboard
            } 
            // else if (user.isSeller) {
            //     window.location.href = 'http://localhost:5175/seller'; // Seller dashboard
            // } 
            else if(user) {
                navigate('/'); // Regular users navigate to the home page
            }

            // Show profile modal for logged-in user
            setShowProfile(true);
        } catch (err) {
            setError(err.message); // Display error if login fails
        }
    };

    // Reset the form inputs when the modal is closed
    useEffect(() => {
        if (!show) {
            setEmail('');
            setPassword('');
            setError('');
        }
    }, [show]);

    // Render the login modal
    return (
        <div className="div">
            {/* Modal for login */}
            <Modal show={show} onHide={handleClose} style={{ marginTop: '10%' }} className='login'>
                <Modal.Header closeButton style={{ backgroundColor: '#001F3f', width: '100%' }}>
                    <Modal.Title style={{ textAlign: 'center', margin: 'auto', color: '#ffffff' }}>
                        Welcome To Restorex
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#001F3F' }}>
                    {/* Login Form */}
                    <Form onSubmit={handleLogin}>
                        {/* Email input */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: '#ffffff' }}>Email :</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Type your email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        {/* Password input */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: '#ffffff' }}>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        {/* Error message */}
                        {error && <p className="text-danger">{error}</p>}

                        {/* Forgot Password Link */}
                        <Button variant="link nodecoration" onClick={() => navigate('/forgetpassword')} style={{ color: '#ffffff', textAlign: 'center' }}>
                            Forgot Password?
                        </Button>

                        {/* Signup Link */}
                        <p style={{ color: '#ffffff', textAlign: 'center' }}>
                            Don't have an account? <Link to="/signup" style={{ color: '#ffffff', textAlign: 'center' }}>Signup</Link>
                        </p>

                        {/* Login button */}
                        <Button type="submit" className='loginbtn' style={{ width: '30%', color: "#001F3F", backgroundColor: '#ffffff' }}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* User profile modal */}
            <UserProfile show={showProfile} handleClose={() => setShowProfile(false)} />
        </div>
    );
}

export default Login;
