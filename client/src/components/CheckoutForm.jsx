import { useState, useEffect } from 'react';
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
    specialInstructions: '', // New field for special instructions
  });

  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderConfirmationNumber, setOrderConfirmationNumber] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [subtotalAmount, setSubtotalAmount] = useState(0);
  const [taxesAmount, setTaxesAmount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Validate card number format (0000 0000 0000 0000)
    if (name === 'cardNumber') {
      const cardNumberRegex = /^(\d{4}\s){3}\d{4}$/;
      if (!cardNumberRegex.test(value)) {
        return;
      }
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
    }

    // Validate expiration date format (00/00)
    if (name === 'expirationDate') {
      const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expirationDateRegex.test(value)) {
        return;
      }
    }

    // Validate CVV format (000)
    if (name === 'cvv') {
      const cvvRegex = /^\d{3}$/;
      if (!cvvRegex.test(value)) {
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const subtotal = calculateSubtotal(cartItems);
    const taxes = calculateTaxes(subtotal);
    const shipping = 21; // Sample shipping cost
    const total = calculateTotal(subtotal, taxes, shipping);

    setOrderConfirmationNumber(generateOrderConfirmationNumber());
    setSubtotalAmount(subtotal);
    setTaxesAmount(taxes);
    setShippingCost(shipping);
    setTotalAmount(total);

    setShowOrderConfirmation(true);
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
      specialInstructions: '' // Clear special instructions on form clear
    });
  };

  const calculateSubtotal = (items) => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };

  const calculateTaxes = (subtotal) => {
    return subtotal * 0.15;
  };

  const calculateTotal = (subtotal, taxes, shipping) => {
    return subtotal + taxes + shipping;
  };

  const generateOrderConfirmationNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <Container style={{ width: '50%', color: 'antiquewhite' }}>
      <h1 className="mb-5">Checkout</h1>
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
          <Form.Label className="mt-2">Street Address</Form.Label>
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
          <Form.Label className="mt-2">City/Town</Form.Label>
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
          <Form.Label className="mt-2">Province</Form.Label>
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
          <Form.Label className="mt-2">Postal Code</Form.Label>
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
            value="4242 4242 4242 4242" // Sample data for testing
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
            value="12/25" // Sample data for testing
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
            value="000" // Sample data for testing
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
        <Button
          variant="dark"
          type="submit"
          className="mt-3"
          style={{ backgroundColor: '#ED217C' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="secondary"
          className="mt-3 ml-3"
          onClick={handleClearForm}
        >
          Clear Form
        </Button>
        </div>
      </Form>
    
      {/* Special Instructions */}
      <Form.Group controlId="formSpecialInstructions">
          <Form.Label>Special Instructions (max 200 characters)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add special instructions..."
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            maxLength={200}
          />
        </Form.Group>

      <OrderConfirmation
        show={showOrderConfirmation}
        onHide={() => setShowOrderConfirmation(false)}
        orderConfirmationNumber={orderConfirmationNumber}
        cartItems={cartItems}
        subtotal={subtotalAmount}
        taxes={taxesAmount}
        shipping={shippingCost}
        total={totalAmount}
        formData={formData}
      />
    </Container>
  );
}

CheckoutForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CheckoutForm;
