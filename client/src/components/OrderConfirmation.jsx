import { Modal, Button } from 'react-bootstrap';

const OrderConfirmationModal = ({ show, onHide, orderConfirmationNumber, cartItems, subtotal, taxes, shipping, total, formData }) => {
  const formattedCardNumber = formData.cardNumber.replace(/\d{4}(?=\d{4})/g, 'XXXX ');

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
        <p>Card Number: {formattedCardNumber}</p>
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
};

export default OrderConfirmationModal;

