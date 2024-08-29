const mongoose = require('mongoose');


const PaymentSchema = new mongoose.Schema({
    
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
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
