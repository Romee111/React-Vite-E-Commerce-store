const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    paymentIntentId: {
        type: String,
        required: true,
    },
    payment_Method: {
        type: String,
        required: true, // e.g., 'card', 'klarna', 'raast_id'
    },
    payment_Status: {
        type: String,
        required: true, // e.g., 'succeeded', 'pending', 'failed'
    },
    country: {
        type: String, // Country or region of the user
        required: true,
    },
    region: {
        type: String, // Specific region or state within the country
        required: false,
    },
    raastId: {
        type: String, // Used if payment method is 'raast_id'
        default: null,
    },
    installmentPlan: {
        type: String, // 'monthly', 'bi-weekly', etc.
        default: null,
    },
    bankDetails: {
        cardNumber: { type: String, required: function() { return this.payment_Method === 'card'; }},
        cardExpiry: { type: String, required: function() { return this.payment_Method === 'card'; }},
        cardCVV: { type: String, required: function() { return this.payment_Method === 'card'; }},
        bankName: { type: String, required: function() { return this.payment_Method === 'card'; }},
    },
    isCOD: {
        type: Boolean, // To specify if the payment method is cash on delivery
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Payment = mongoose.model('Payment', PaymentSchema);
  module.exports = Payment
