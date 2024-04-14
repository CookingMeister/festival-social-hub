import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import OrderConfirmation from './OrderConfirmation'; // Import the OrderConfirmation component

function CheckoutForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Validate card number format (0000 0000 0000 0000)
    if (name === 'cardNumber') {
      const cardNumberRegex = /^(\d{4}\s){3}\d{4}$/;
      if (!cardNumberRegex.test(value)) {
        // Invalid format, don't update the state
        return;
      }
      // Format the value with spaces every 4 digits
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    // Validate expiration date format (00/00)
    if (name === 'expirationDate') {
      const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expirationDateRegex.test(value)) {
        // Invalid format, don't update the state
        return;
      }
    }

    // Validate CVV format (000)
    if (name === 'cvv') {
      const cvvRegex = /^\d{3}$/;
      if (!cvvRegex.test(value)) {
        // Invalid format, don't update the state
        return;
      }
    }

    // Update the form data with the formatted value
    setFormData({
      ...formData,
      [name]: formattedValue,
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
      streetAddress: '',
      city: '',
      province: '',
      postalCode: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
    onClose(); // Close the modal after form submission
    setShowOrderConfirmation(true); // Show the confirmation modal
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      streetAddress: '',
      city: '',
      province: '',
      postalCode: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
  };

  return (
    <Container style={{ width: '50%', color: 'antiquewhite' }}>
      <h1 className="mb-5"> Checkout</h1>
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
          <Form.Label className="mt-2">Email address</Form.Label>
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
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your street address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City/Town</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city/town"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProvince">
          <Form.Label>Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your postal code (e.g., X0X 0X0)"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
            title="Please enter a valid Canadian postal code (e.g., X0X 0X0)"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCardNumber">
          <Form.Label className="mt-2">Card Number</Form.Label>
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
          <Form.Label className="mt-2">Expiration Date</Form.Label>
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
          <Form.Label className="mt-2">CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="mt-3"
          style={{ backgroundColor: '#ED217C' }}
        >
          Submit
        </Button>
        <Button variant="secondary" className="mt-3 ml-3" onClick={handleClearForm}>
          Clear Form
        </Button>
      </Form>
    </Container>
  );
}

CheckoutForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CheckoutForm;
