import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import OrderConfirmation from './OrderConfirmation'; // Import the OrderConfirmation component

function CheckoutForm() {
  // State variables initialization
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
    specialInstructions: '', // Optional field for special instructions
  });

  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderConfirmationNumber, setOrderConfirmationNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotalAmount, setSubtotalAmount] = useState(0);
  const [taxesAmount, setTaxesAmount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [cityError, setCityError] = useState('');
  const [provinceError, setProvinceError] = useState('');
  const [postalError, setPostalError] = useState('');

  const validateEmail = () => {
    // Regular expression for email validation & sets error message
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  // handleChange function to update form data state
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
    // Update formData state with new value
    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    //clears error message once user starts typing in each field
    switch(name) {
      case 'name':
        setNameError('');
        break;
      case 'email':
        setEmailError('');
        break;
      case 'streetAddress':
        setStreetError('');
        break;
      case 'city':
        setCityError('');
        break;
      case 'province':
        setProvinceError('');
        break;
      case 'postalCode':
        setPostalError('');
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // conditional to check if individual field is empty & sets error message
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.streetAddress.trim() === '' ||
      formData.city.trim() === '' ||
      formData.province.trim() === '' ||
      formData.postalCode.trim() === ''
    ) {
      setNameError(formData.name.trim() === '' ? 'Name is required' : '');
      setEmailError(formData.email.trim() === '' ? 'Email is required' : '');
      setStreetError(formData.streetAddress.trim() === '' ? 'Street Address is required' : '');
      setCityError(formData.city.trim() === '' ? 'City/Town is required' : '');
      setProvinceError(formData.province.trim() === '' ? 'Province is required' : '');
      setPostalError(formData.postalCode.trim() === '' ? 'Postal Code is required' : '');
      return;
    }

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
      specialInstructions: '', // Clear special instructions on form clear
    });
  };
// Calculate subtotal, taxes, shipping, and total amounts
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

  // JSX return statement
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
            isInvalid={!!nameError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {nameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="mt-2">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!emailError}
            onBlur={validateEmail}
            required
          />
           <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label className="mt-2">Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your street address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            isInvalid={!!streetError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {streetError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label className="mt-2">City / Town</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city/town"
            name="city"
            value={formData.city}
            onChange={handleChange}
            isInvalid={!!cityError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {cityError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formProvince">
          <Form.Label className="mt-2">Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            isInvalid={!!provinceError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {provinceError}
          </Form.Control.Feedback>
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
            isInvalid={postalError}
            required
          />
          <Form.Control.Feedback type="invalid">
            {postalError}
          </Form.Control.Feedback>
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

        {/* Special Instructions */}
        <Form.Group controlId="formSpecialInstructions">
          <Form.Label className="mt-2">
            Special Instructions (max 200 characters)
          </Form.Label>
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
        <div className="d-flex justify-content-between">
          <Button
            variant="dark"
            type="submit"
            className="mt-3"
            style={{ backgroundColor: '#ED217C', borderColor: 'antiquewhite' }}
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-cloud-arrow-up"
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
              />
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
            {' '}Submit
          </Button>
          <Button
            variant="dark"
            className="mt-3"
            style={{ backgroundColor: '#1B998B', borderColor: 'antiquewhite' }}
            onClick={handleClearForm}
          >
            Clear Form
          </Button>
        </div>
      </Form>

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
export default CheckoutForm;
