import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ItemCard({
  item,
  isInStock,
  handleShowItemAdded,
  handleSizeRequired,
}) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    if (selectedSize) {
      const cartItem = {
        name: item.name,
        size: selectedSize,
        price: item.price,
      };

      const existingCartItems =
        JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedCartItems = [...existingCartItems, cartItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      handleShowItemAdded();
    } else {
      handleSizeRequired();
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleStyle = (event) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.style.boxShadow = '';
    });
    event.target.closest('.card').style.boxShadow =
      '0 0 10px 5px rgba(255, 255, 255, 0.5)';
  };

  return (
    <div>
      <Card
        style={{ backgroundColor: '#1B998B' }}
        className="m-2 card"
        onFocus={handleStyle}
      >
        <Card.Img
          variant="top"
          src={item.img}
          style={{
            width: '95%',
            margin: '0 auto',
            objectFit: 'cover',
            overflow: 'hidden',
            height: '300px',
            marginTop: '2%',
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: 'black',
              textAlign: 'center',
              margin: '4%',
              fontWeight: '800',
            }}
          >
            {item.name}
          </Card.Title>
          <Card.Text
            style={{
              color: '#fffB0a',
              textAlign: 'center',
              textShadow: '1px 1px 3px #000000',
              fontStyle: 'italic',
              padding: '3%',
            }}
          >
            {item.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            style={{
              backgroundColor: 'antiquewhite',
              color: '#5F6695',
              textAlign: 'center',
              fontWeight: 'bold',
              padding: '4%',
            }}
          >
            ${item.price}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: 'antiquewhite',
              color: '#5F6695',
              textAlign: 'center',
              fontWeight: 'bold',
              fontStyle: 'italic',
              paddingTop: '4%',
            }}
          >
            {isInStock ? <p>In Stock</p> : <p>Out of Stock</p>}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center">
            <Dropdown className="mx-2" size="sm">
              <Dropdown.Toggle
                size="sm"
                id="dropdown-basic"
                style={{
                  backgroundColor: '#5F6695',
                  outline: '#5F6695',
                  color: '#FFFB0A',
                  textShadow: '1px 1px 3px #000000',
                }}
              >
                {selectedSize ? selectedSize : 'Size'}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                {item.sizes.map((size, index) => (
                  <Dropdown.Item
                    style={{
                      color: '#FFFB0A',
                      textShadow: '1px 1px 3px #000000',
                    }}
                    key={index}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              size="sm"
              className="m-1"
              style={{
                backgroundColor: '#5F6695',
                color: '#fffB0A',
                textShadow: '1px 1px 3px #000000',
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isInStock: PropTypes.bool.isRequired,
  handleShowItemAdded: PropTypes.func.isRequired,
  handleSizeRequired: PropTypes.func.isRequired,
};

export default ItemCard;
