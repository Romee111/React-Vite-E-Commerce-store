const express = require('express');
const router = express.Router();
const { createPayment, handleWebhook } = require('../controllers/paymentcontroller'); // Adjust the path as needed

// Route to create a payment
router.post('/create', createPayment);

// Route to handle Stripe webhooks
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;