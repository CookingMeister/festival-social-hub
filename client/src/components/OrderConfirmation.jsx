import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OrderConfirmation({ show, onHide, orderConfirmationNumber, subtotal, taxes, shipping, total, formData }) {
  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your order has been confirmed.</p>
        <p>Order Confirmation Number: {orderConfirmationNumber}</p>
        <p>Order Details:</p>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Subtotal: ${subtotal}</p>
        <p>Taxes: ${taxes}</p>
        <p>Shipping: ${shipping}</p>
        <p>Total: ${total}</p>
        <p>Checkout Form Details:</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Street Address: {formData.streetAddress}</p>
        <p>City: {formData.city}</p>
        <p>Province: {formData.province}</p>
        <p>Postal Code: {formData.postalCode}</p>
        <p>Card Number: {formData.cardNumber}</p>
        <p>Expiration Date: {formData.expirationDate}</p>
        <p>CVV: {formData.cvv}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderConfirmation;
