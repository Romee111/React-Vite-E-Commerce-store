import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import {useAuth} from '../hooks/userauthhooks';
function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);    
     const {login} = useAuth();
   const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      console.log('Login successful');
      handleClose();
    } catch (err) {
      setError(err.message);
    }
   }

   const handleClose = () => setShow(false);
   useEffect(() => {
    if(!show){
        setEmail('');
        setPassword('');
        setError('');
    }

   }, [])
   
  return (
    <div>
          <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default login

