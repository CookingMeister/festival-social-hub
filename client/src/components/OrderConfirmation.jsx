import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';// Import PropTypes for type-checking

// Defines OrderConfirmationModal component
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

// JSX return statement
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
          <>
            <h5 className="py-3">Special Instructions:</h5>
            <p className='mx-5'>{formData.specialInstructions}</p>
          </>
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

// PropTypes validation
OrderConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,// Show modal prop
  onHide: PropTypes.func.isRequired,// Hide modal prop
  orderConfirmationNumber: PropTypes.number.isRequired,// Order confirmation number prop
  cartItems: PropTypes.arrayOf(// Cart items prop
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  subtotal: PropTypes.number.isRequired,// Subtotal prop
  taxes: PropTypes.number.isRequired,// Taxes prop
  shipping: PropTypes.number.isRequired,// Shipping cost prop
  total: PropTypes.number.isRequired,// Total amount prop
  formData: PropTypes.shape({// Form data prop
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    specialInstructions: PropTypes.string,// Special instructions (optional)
  }).isRequired,
};
// Export the OrderConfirmationModal component
export default OrderConfirmationModal;
