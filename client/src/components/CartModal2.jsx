import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function CartModal2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems'));

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
                className='mx-1'>
                Go to Cart
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered

            >
                <Modal.Header style={{ backgroundColor: '#333333', color: "#ed217c" }} closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#333333', color: "#ed217c" }} >
                    {existingCartItems && existingCartItems.length > 0 ? (
                        existingCartItems.map((existingCartItem, index) => (
                            <div key={index}>
                                <h6><strong>{existingCartItem.name}</strong></h6>
                                <p><strong> Size: </strong>{existingCartItem.size} </p>
                                <p><strong>Price: {existingCartItem.price}</strong></p>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#333333', color: "#ed217c" }} className='d-flex justify-content-between'>
                    <h5>Total: </h5>
                    <Link to='/checkout'>
                        <Button style={{
                            backgroundColor: '#5F6695',
                            outline: '#5F6695',
                            color: '#FFFB0A',
                            textShadow: '1px 1px 3px #000000'
                        }}>Checkout</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal2;