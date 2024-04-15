/*import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27', // Ensure the latest API version is used
});

// Route handler for creating a checkout session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      // Your checkout session configuration here
    });
    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for handling webhook events
router.post('/webhook', async (req, res) => {
  try {
    // Handle webhook event here
    // Verify signature, parse event data, and process event
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;*/
