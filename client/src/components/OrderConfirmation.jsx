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
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton style={{ backgroundColor: 'antiquewhite' }}>
        <Modal.Title
          style={{
            marginLeft: '7.5rem',
            color: '#ED217C',
            textShadow: '1px 1px 2px black',
          }}
        >
          Order Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'antiquewhite' }}>
        <p className="text-center">Your order has been confirmed.</p>
        <p className="text-center">
          Order Confirmation Number:{' '}
          <span>
            <b>{orderConfirmationNumber}</b>
          </span>
        </p>
        <hr />
        <h5 className="text-center">Order Details:</h5>
        <h5 className="mt-3 mb-3">Items:</h5>
        <ul className="mx-5 list-unstyled">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name}
              {':'}
              <span style={{ padding: '0 1rem' }}>${item.price}</span>
            </li>
          ))}
        </ul>
        <ul className="mx-5 list-unstyled">
          <li>
            Subtotal: <span style={{ padding: '0 1rem' }}>${subtotal}</span>
          </li>
          <li>
            Taxes: <span style={{ padding: '0 1rem' }}>${taxes}</span>
          </li>
          <li>
            Shipping: <span style={{ padding: '0 1rem' }}>${shipping}</span>
          </li>
          <li className="mt-2">
            <b>Total:</b> <span style={{ padding: '0 1rem' }}>${total}</span>
          </li>
        </ul>

        <hr />
        <h5 className="text-center p-3">Checkout Form Details:</h5>
        <h5 className="py-2">Email:</h5>
        <ul className="mx-5 list-unstyled">
          <li>{formData.email}</li>
        </ul>

        <h5 className="py-3">Address:</h5>
        <ul className="mx-5 list-unstyled">
          <li>{formData.name}</li>
          <li>{formData.streetAddress}</li>
          <li>{formData.city}</li>
          <li>
            {formData.province}
            <span className="mx-2">{formData.postalCode}</span>
          </li>
        </ul>

        {formData.specialInstructions && (
          <p>
            Special Instructions: <span>{formData.specialInstructions}</span>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: 'antiquewhite',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="dark"
          style={{ backgroundColor: '#ED217C' }}
          onClick={onHide}
        >
          Print Details
        </Button>
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
