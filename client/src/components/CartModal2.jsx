import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function CartModal2() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    const totalPrice = existingCartItems.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    setTotal(totalPrice);
    console.log('total:', total);
  }, [existingCartItems, total]);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: '#5F6695',
          outline: '#5F6695',
          color: '#FFFB0A',
          textShadow: '1px 1px 3px #000000',
        }}
        className="mx-1"
      >
        Go to Cart
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          style={{ backgroundColor: '#333333', color: '#ed217c' }}
          closeButton
        >
          <Modal.Title style={{textShadow: '1px 1px 3px black'}}>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#333333', color: '#ed217c', textShadow: '1px 1px 3px black' }}>
          {existingCartItems && existingCartItems.length > 0 ? (
            existingCartItems.map((existingCartItem, index) => (
              <div key={index}>
                <h5 className="m-3">
                  <strong>{existingCartItem.name}</strong>
                </h5>
                <div className="d-flex justify-content-between pt-1 px-4">
                <p>
                  <strong> Size: {existingCartItem.size}</strong>
                </p>
                <p>
                  <strong>
                    Price:
                    <span
                      style={{ color: 'antiquewhite', fontWeight: 'normal', textShadow: '1px 1px 3px black' }}
                    >
                      {' $ '}
                      {existingCartItem.price}
                    </span>
                  </strong>
                </p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: '#333333', color: '#ed217c', textShadow: '1px 1px 3px black' }}
          className="d-flex justify-content-between px-5"
        >
          <Link to="/checkout">
            <Button
              style={{
                backgroundColor: '#5F6695',
                outline: '#5F6695',
                color: '#FFFB0A',
                textShadow: '1px 1px 3px black'
              }}
            >
              Checkout
            </Button>
          </Link>
          <h5 style={{ color: 'antiquewhite' }}>
            Total: {' $ '}
            {total}
          </h5>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal2;
