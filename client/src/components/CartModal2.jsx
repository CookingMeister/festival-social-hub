import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function CartModal2() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [existingCartItems, setExistingCartItems] = useState(
    localStorage.getItem('cartItems') === null
      ? []
      : JSON.parse(localStorage.getItem('cartItems'))
  );

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setExistingCartItems(JSON.parse(localStorage.getItem('cartItems')));
    setShow(true);
  };

  const handleClearCart = () => {
    setExistingCartItems([]);
    localStorage.removeItem('cartItems');
  };

  useEffect(() => {
    if (existingCartItems) {
      const totalPrice = existingCartItems.reduce(
        (acc, item) => acc + parseFloat(item.price),
        0
      );
      setTotal(totalPrice);
    }
  }, [existingCartItems, total]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    console.log('existingCartItems effect changed:', existingCartItems);
  }, [existingCartItems]);

  useEffect(() => {
    setExistingCartItems(JSON.parse(localStorage.getItem('cartItems')));
  }, []);

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
        Go to{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 18 18"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
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
          <Modal.Title style={{ textShadow: '1px 1px 3px black' }}>
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: '#333333',
            color: '#ed217c',
            textShadow: '1px 1px 3px black',
          }}
        >
          {existingCartItems && existingCartItems.length > 0 ? (
            existingCartItems.map((existingCartItem, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5
                    className="m-3"
                    style={{ color: 'antiquewhite', fontWeight: '600' }}
                  >
                    {existingCartItem.name}
                  </h5>
                  <button
                    className="btn btn-link text-danger border-danger"
                    onClick={(e) => {
                      const updatedCartItems = existingCartItems.filter(
                        (item, i) => i !== index
                      );
                      setExistingCartItems(updatedCartItems);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 17"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </div>
                <div className="d-flex justify-content-between pt-1 px-4">
                  <p>
                    <strong>
                      {' '}
                      Size:{' '}
                      <span
                        style={{
                          color: 'antiquewhite',
                          fontWeight: '500',
                          marginLeft: '2px',
                        }}
                      >
                        {existingCartItem.size}
                      </span>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Price:
                      <span
                        style={{
                          color: 'antiquewhite',
                          fontWeight: 'normal',
                          textShadow: '1px 1px 3px black',
                        }}
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
          style={{
            backgroundColor: '#333333',
            color: '#ed217c',
            textShadow: '1px 1px 3px black',
          }}
          className="d-flex justify-content-between px-5"
        >
          <Link to="/checkout">
            <Button
            variant="light"
              className="m-1"
              style={{
                fontWeight: 'bold',
              }}
            >
              Checkout
            </Button>
          </Link>
          <Button
            className="m-1"
            onClick={handleClearCart}
            style={{
              fontWeight: 'bold',
              color: 'black',
              border: 'none',
              backgroundColor: '#1B998B',
            }}
          >
            Clear Cart
          </Button>
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
