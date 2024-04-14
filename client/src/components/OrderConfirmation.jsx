import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OrderConfirmation({ show, onHide, orderConfirmationNumber, cartItems, subtotal, taxes, shipping, total }) {
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
