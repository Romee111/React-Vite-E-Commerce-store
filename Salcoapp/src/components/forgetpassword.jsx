import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/userauthhooks'; // Import the Axios hook
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { forgetPassword } = useAuth(); // Use the Axios hook
    const navigate = useNavigate();

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!email) {
            setError('Please enter your email to reset the password');
            return;
        }

        try {
            debugger
            await forgetPassword(email);
            setSuccessMessage('Password reset email sent. Please check your email.');
            navigate('/resetpassword');
        } catch (err) {
            setError(err.message || 'Password reset failed');
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '400px',
    };

    const buttonStyle = {
        width: '100%',
    };

    const textCenterStyle = {
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h2 style={textCenterStyle}>Forgot Password</h2>
            <Form onSubmit={handleForgetPassword} style={formStyle}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {error && <p className="text-danger">{error}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}

                <Button  type="submit" style={buttonStyle}>
                    Reset Password
                </Button>
            </Form>
        </div>
    );
}

export default ForgetPassword;
