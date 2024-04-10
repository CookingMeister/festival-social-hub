// CartModal.jsx

import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/CartContext';
import PropTypes from 'prop-types';

function CartModal({ product }) {
  const cart = useContext(CartContext);
  const [notes, setNotes] = useState('');

  const handleAddToCart = () => {
    // Check if the item is already in the cart
    const existingItem = cart.cartItems.find(item => item.id === product._id);

    if (!existingItem) {
      // If the item is not in the cart, add it with quantity 1 and notes
      cart.addToCart({ ...product, quantity: 1, notes });
    }
  };

  return (
    <>
      <h3>{product.name}</h3>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <Form.Group controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Form.Group>
      <Button size="sm" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <hr />
    </>
  );
}

CartModal.propTypes = {
  product: PropTypes.object,
};

export default CartModal;
