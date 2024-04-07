import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get payment method details from CardElement
    const cardElement = elements.getElement(CardElement);

    // Confirm the payment with Stripe
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      // Provide necessary payment details here, such as amount, currency, and payment method
      {
        payment_method: {
          card: cardElement,
          // Add other payment method details as needed
        }
      }
    );

    if (error) {
      // Display error to user (e.g., invalid card details)
      console.error('Payment failed:', error.message);
    } else if (paymentIntent) {
      // Payment succeeded, provide feedback to user (e.g., redirect to success page)
      console.log('Payment successful:', paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
