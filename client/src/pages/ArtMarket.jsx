import Dropdown from 'react-bootstrap/Dropdown';
import productDetails from '../utils/productDetails.json';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import items from '../utils/items.json';
import ItemCard from '../components/ItemCard';

function ArtMarket() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedBestSeller, setSelectedBestSeller] = useState(null);

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };

  const handleBestSellerSelect = (bestSeller) => {
    setSelectedBestSeller(bestSeller);
  };

  const handleReset = () => {
    setSelectedStyle(null);
    setSelectedBestSeller(null);
  };

  const filteredItems = items.filter((item) => {
    if (selectedStyle && selectedBestSeller) {
      return item.style === selectedStyle && item.name === selectedBestSeller;
    } else if (selectedStyle) {
      return item.style === selectedStyle;
    } else if (selectedBestSeller) {
      return item.name === selectedBestSeller;
    }
    return true;
  });

  return (
    <div className="m-2 py-3" style={{ minHeight: '100vh' }}>
      <Row>
        <Row className="d-flex justify-content-center">
          <Image
            src="/artMarketLogo.png"
            style={{
              backgroundImage: 'contain',
              width: '300px',
              height: '260px',
            }}
          />
        </Row>
        <Row>
          <div className="d-flex justify-content-end mt-3">
            <Dropdown className="mx-1">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#5F6695',
                  outline: '#5F6695',
                  color: '#FFFB0A',
                }}
              >
                {selectedStyle ? selectedStyle : 'Style'}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                {productDetails.styles.map((style, index) => (
                  <Dropdown.Item
                    style={{ color: '#FFFB0A' }}
                    key={index}
                    onClick={() => handleStyleSelect(style)}
                  >
                    {style}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-1">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#5F6695',
                  outline: '#5F6695',
                  color: '#FFFB0A',
                }}
              >
                {selectedBestSeller ? selectedBestSeller : 'Best Seller'}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: '#5F6695' }}>
                {productDetails.BestSellers.map((bestSeller, index) => (
                  <Dropdown.Item
                    style={{ color: '#FFFB0A' }}
                    key={index}
                    onClick={() => handleBestSellerSelect(bestSeller)}
                  >
                    {bestSeller}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              style={{
                backgroundColor: '#5F6695',
                outline: '#5F6695',
                color: '#FFFB0A',
              }}
              className='mx-1'
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              style={{
                backgroundColor: '#5F6695',
                outline: '#5F6695',
                color: '#FFFB0A',
              }}
              className='mx-1'
            >
              Go to Cart
            </Button>
          </div>
        </Row>
        <Row className="d-flex justify-content-around p-4">
          {filteredItems.map((item, index) => (
            <Col xl={3} lg={4} sm={6} xs={12} key={index} className='mt-4'>
              <ItemCard {...item} />
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export default ArtMarket;
