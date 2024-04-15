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
  
  const spanStyle = {
    fontWeight: 500,
    fontStyle: 'italic',
    padding: '2rem 2rem ',
    textAlign: 'center',
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton style={{ backgroundColor: 'antiquewhite' }}>
        <Modal.Title
          style={{ color: '#ED217C', textShadow: '1px 1px 2px black' }}
        >
          Order Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ fontWeight: 'bold', backgroundColor: 'antiquewhite' }}
      >
        <p className="text-center">Your order has been confirmed.</p>
        <p className="text-center">
          Order Confirmation Number:{' '}
          <span style={spanStyle}>{orderConfirmationNumber}</span>
        </p>
        <hr />
        <h5 className="text-center p-2">Order Details:</h5>
        <ul className="list-unstyled p-3">
          {cartItems.map((item, index) => (
            <li key={index}>
              <span style={{ padding: '0 1rem', fontWeight: 'normal' }}>
                {item.name}
              </span>{' '}
              -{' '}
              <span style={{ padding: '0 1rem', fontWeight: 'normal' }}>
                ${item.price}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Subtotal: <span style={spanStyle}>${subtotal}</span>
        </p>
        <p>
          Taxes: <span style={spanStyle}>${taxes}</span>
        </p>
        <p>
          Shipping: <span style={spanStyle}>${shipping}</span>
        </p>
        <p>
          Total: <span style={spanStyle}>${total}</span>
        </p>
        <hr />
        <h5 className="text-center p-3">Checkout Form Details:</h5>
        <p>
          Name: <span style={spanStyle}>{formData.name}</span>
        </p>
        <p>
          Email: <span style={spanStyle}>{formData.email}</span>
        </p>
        <p>
          Street Address:{' '}
          <span style={spanStyle}>{formData.streetAddress}</span>
        </p>
        <p>
          City: <span style={spanStyle}>{formData.city}</span>
        </p>
        <p>
          Province: <span style={spanStyle}>{formData.province}</span>
        </p>
        <p>
          Postal Code: <span style={spanStyle}>{formData.postalCode}</span>
        </p>
        {formData.specialInstructions && (
          <p>
            Special Instructions:{' '}
            <span style={spanStyle}>{formData.specialInstructions}</span>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'antiquewhite' }}>
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
    specialInstructions: PropTypes.string,
  }).isRequired,
};

export default OrderConfirmationModal;
