import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CheckoutForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      address: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      // Reset other fields as well
    });
    onClose(); // Close the modal after form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter card number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formExpirationDate">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/YY"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCVV">
        <Form.Label>CVV</Form.Label>
        <Form.Control
          type="text"
          placeholder="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CheckoutForm;