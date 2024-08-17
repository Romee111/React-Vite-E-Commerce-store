import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../hooks/userauthhooks';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserProfile from '../components/userprofile'; // Import UserProfile component
import '../styling/login.css';

function Login({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginApi, setUser } = useAuth();
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please enter email and password');
            return;
        }

        try {
            const user = await loginApi(email, password);
            setUser(user);
            handleClose(); // Close login modal

            // Navigate or do other actions based on user role
            if (user.isAdmin) {
                window.location.href = 'http://localhost:5174/admin';
            } else {
                navigate('/');
            }

            // Show profile modal
            setShowProfile(true);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (!show) {
            setEmail('');
            setPassword('');
            setError('');
        }
    }, [show]);

    return (
        <div className="div">
            <Modal show={show} onHide={handleClose} style={{ marginTop: '10%' }} className='login'>
                <Modal.Header closeButton style={{ backgroundColor: '#001F3f', width: '100%' }}>
                    <Modal.Title style={{ textAlign: 'center', margin: 'auto', color: '#ffffff' }}>
                        Welcome To Restorex
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#001F3F' }}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: '#ffffff' }}>Email :</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Type your email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: '#ffffff' }}>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        {error && <p className="text-danger">{error}</p>}
                        <Button variant="link nodecoration" onClick={() => navigate('/forgetpassword')} style={{ color: '#ffffff', textAlign: 'center' }}>
                            Forgot Password?
                        </Button>
                        <p style={{ color: '#ffffff', textAlign: 'center' }}>
                            Don't have an account? <Link to="/signup" style={{ color: '#ffffff', textAlign: 'center' }}>Signup</Link>
                        </p>

                        <Button type="submit" className='loginbtn'>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Add UserProfile modal */}
            <UserProfile show={showProfile} handleClose={() => setShowProfile(false)} />
        </div>
    );
}

export default Login;
