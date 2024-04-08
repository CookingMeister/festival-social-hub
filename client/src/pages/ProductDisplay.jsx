import { Button, Container } from 'react-bootstrap';

const ProductDisplay = () => (
  <Container className="d-flex flex-column align-items-center vh-100">
    <div className="product text-center mt-5">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
        className='rounded-3'
      />
      <div className="description mt-3">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form
      action="/create-checkout-session"
      method="POST"
    >
      <Button type="submit" variant="light" className="mt-2">
        Checkout
      </Button>
    </form>
  </Container>
);

export default ProductDisplay;
