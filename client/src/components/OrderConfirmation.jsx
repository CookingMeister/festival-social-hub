import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const OrderConfirmationModal = ({
  show,
  onHide,
  orderConfirmationNumber,
  cartItems,
  subtotal,
  taxes,
  shipping,
  total,
  formData,
}) => {
  const formattedCardNumber = formData.cardNumber.replace(
    /\d{4}(?=\d{4})/g,
    'XXXX '
  );

  console.log(cartItems);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ fontWeight: 'bold' }}>
        <p className="text-center">Your order has been confirmed.</p>
        <p className="text-center">
          Order Confirmation Number:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {orderConfirmationNumber}
          </span>
        </p>
        <hr />
        <h5 className="text-center">Order Details:</h5>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
                {item.name}
              </span>{' '}
              -{' '}
              <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
                ${item.price}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Subtotal:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            ${subtotal}
          </span>
        </p>
        <p>
          Taxes:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>${taxes}</span>
        </p>
        <p>
          Shipping:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            ${shipping}
          </span>
        </p>
        <p>
          Total:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>${total}</span>
        </p>
        <hr />
        <h5 className="text-center p-2">Checkout Form Details:</h5>
        <p>
          Name:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.name}
          </span>
        </p>
        <p>
          Email:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.email}
          </span>
        </p>
        <p>
          Street Address:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.streetAddress}
          </span>
        </p>
        <p>
          City:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.city}
          </span>
        </p>
        <p>
          Province:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.province}
          </span>
        </p>
        <p>
          Postal Code:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.postalCode}
          </span>
        </p>
        <p>
          Card Number:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formattedCardNumber}
          </span>
        </p>
        <p>
          Expiration Date:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.expirationDate}
          </span>
        </p>
        <p>
          CVV:{' '}
          <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
            {formData.cvv}
          </span>
        </p>
        {formData.specialInstructions && (
          <p>
            Special Instructions:{' '}
            <span className='p-3' style={{ fontWeight: 500, fontStyle: 'italic' }}>
              {formData.specialInstructions}
            </span>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark"
          style={{ backgroundColor: '#1B998B' }}
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

OrderConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  orderConfirmationNumber: PropTypes.number.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  subtotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    specialInstructions: PropTypes.string,
  }).isRequired,
};

export default OrderConfirmationModal;
