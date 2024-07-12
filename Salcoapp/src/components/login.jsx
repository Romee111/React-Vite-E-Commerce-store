import React, { useEffect, useState } from 'react';
import { Form, Button, Modal,} from 'react-bootstrap';
import { useAuth } from '../hooks/userauthhooks';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, forgetPassword } = useAuth();
    const navigator = useNavigate();

     const handleSignup = () => {
        navigator('/signup');
     }
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email');
            return;
        }

        if (!password) {
            setError('Please enter your password');
            return;
        }

        try {
            await login(email, password);
            console.log('Login successful');
            handleClose();
        } catch (err) {
            setError(err.message || 'Login failed');
        }
    };

    const handleForgotPassword = async () => {
        setError('');
        
        if (!email) {
            setError('Please enter your email to reset password');
            return;
        }

        try {
            await forgetPassword(email);
            setError('Password reset email sent');
        } catch (err) {
            setError(err.message || 'Password reset failed');
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
        <Modal show={show} onHide={handleClose} style={{marginTop: '10%',width: '300px,height: 150px,marginLeft: 500px'}}>
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center', margin: 'auto' }}>Welcome To Restorex</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control
                            
                            type="email"
                            placeholder="Type your email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button variant="link" onClick={handleForgotPassword}>
                    Forgot Password?
                </Button>
                      <p>Dont have an account? <Link to="/signup">Signup</Link></p>
                    </Form.Group>

                    {error && <p className="text-danger">{error}</p>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
                
            </Modal.Footer>
        </Modal>
    );
}

export default Login;
