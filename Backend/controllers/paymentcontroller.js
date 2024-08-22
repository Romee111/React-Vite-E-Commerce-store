const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentmodel');

exports.createPayment = async (req, res) => {
    try {
        const { amount, currency, raastId, paymentMethod, installmentPlan, bankDetails, isCOD, country, region } = req.body;

        let paymentIntent;

        // Determine whether Klarna is available based on country/region
        const isKlarnaAvailable = checkKlarnaAvailability(country, region);

        if (isCOD) {
            // Handle Cash on Delivery using Raast_ID, no installment plan
            paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                payment_method_types: ['card'], // Use 'card' or another fallback method for COD
                payment_method_options: {
                    card: {
                        request_three_d_secure: 'any',
                    },
                },
            });
        } else {
            if (isKlarnaAvailable && paymentMethod === 'klarna') {
                // Use Klarna if available and requested
                paymentIntent = await stripe.paymentIntents.create({
                    amount,
                    currency,
                    payment_method_types: ['klarna'],
                    payment_method_options: {
                        klarna: {
                            preferred_locale: 'en-US',
                        },
                    },
                });
            } else if (paymentMethod === 'card') {
                // Payment by Card with region-specific bank details
                paymentIntent = await stripe.paymentIntents.create({
                    amount,
                    currency,
                    payment_method_types: ['card'],
                    payment_method_options: {
                        card: {
                            installments: installmentPlan ? { enabled: true } : { enabled: false },
                            request_three_d_secure: 'any',
                        },
                    },
                });
            } else if (!isKlarnaAvailable && paymentMethod === 'raast_id') {
                // Fallback to Raast_ID if Klarna is not available
                paymentIntent = await stripe.paymentIntents.create({
                    amount,
                    currency,
                    payment_method_types: ['card'], // Or another payment method supported by Raast_ID
                });
            }
        }

        const payment = new Payment({
            amount,
            currency,
            paymentIntentId: paymentIntent.id,
            payment_Method: paymentMethod,
            payment_Status: paymentIntent.status,
            country,
            region,
            raastId: isCOD ? raastId : null,
            installmentPlan: isCOD ? null : installmentPlan, // No installments on COD
            bankDetails: paymentMethod === 'card' ? bankDetails : null,
            isCOD,
        });

        await payment.save();

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

function checkKlarnaAvailability(country, region) {
    // Logic to determine if Klarna is available in the given country or region
    const klarnaCountries = ['US', 'UK', 'SE', 'DE']; // Example countries where Klarna is available

    return klarnaCountries.includes(country);
}

exports.handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.WEBHOOK_SECRET);
    } catch (error) {
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object;
            await Payment.findOneAndUpdate(
                { paymentIntentId: paymentIntent.id },
                { payment_Status: 'succeeded' }
            );
        }

        res.json({ received: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
