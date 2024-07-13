import React, { useEffect, useState } from 'react';
import { Form, Button, Modal,} from 'react-bootstrap';
import { useAuth } from '../hooks/userauthhooks';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styling/login.css';
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
      <div className="div">
          <Modal show={show} onHide={handleClose} style={{marginTop: '10%'}} className='login' >
            <Modal.Header closeButton style={{ backgroundColor: '#001F3f',width: '100%', }}>
                <Modal.Title style={{ textAlign: 'center', margin: 'auto',color:'#ffffff' }}>Welcome To Restorex</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{  backgroundColor: '#001F3F',}}>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{color:'#ffffff'}}>Email :</Form.Label>
                        <Form.Control
                             
                            type="email"
                            placeholder="Type your email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{color:'#ffffff'}}>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                     
                    </Form.Group>

                    {error && <p className="text-danger">{error}</p>}
                </Form>
                
                <Button variant="link nodecoration" onClick={handleForgotPassword} style={{color:'#ffffff',textAlign: 'center'}}>
                    Forgot Password?
                </Button>
                <p style={{color:'#ffffff',textAlign: 'center'}}>Dont have an account? <Link to="/signup" style={{color:'#ffffff',textAlign: 'center'}}>Signup</Link></p>
                <Button  onClick={handleLogin}  className='loginbtn'>
                    Login
                </Button>
            </Modal.Body>
            
        </Modal>
      </div>
    );
}

export default Login;
