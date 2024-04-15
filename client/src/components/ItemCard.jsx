import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

//props propped down from parent component 'Art Market'
function ItemCard({
  item,
  isInStock,
  handleShowItemAdded,
  handleSizeRequired,
}) {
  const [selectedSize, setSelectedSize] = useState(null);

  // saves item to local storage
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

  // adds box shadow styling for each card
  const handleStyle = (event) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.style.boxShadow = '';
    });
    event.target.closest('.card').style.boxShadow =
      '0 0 10px 5px rgba(255, 255, 255, 0.5)';
  };

  // displays item info retrieved from db 
  return (
    <div>
      <Card
        style={{ backgroundColor: '#1B998B' }}
        className="m-2 card"
        onFocus={handleStyle}
      >
        <Card.Img
          variant="top"
          src={item.imageUrl}
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
                  border: 'none',
                  color: '#FFFB0A',
                  textShadow: '1px 1px 3px #000000',
                }}
              >
                {selectedSize ? selectedSize : 'Size'}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                {item.category.size.map((size, index) => (
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
                border: 'none',
                textShadow: '1px 1px 3px #000000',
              }}
              onClick={handleAddToCart}
            >
              Add to {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 18"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

//proptype validation
ItemCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.shape({
      size: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  isInStock: PropTypes.bool.isRequired,
  handleShowItemAdded: PropTypes.func.isRequired,
  handleSizeRequired: PropTypes.func.isRequired,
};

export default ItemCard;
