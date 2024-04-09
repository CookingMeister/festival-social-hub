import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import items from '../utils/items.json';
import ItemCard from '../components/ItemCard';
import ArtMarketButtons from '../components/ArtMarketButtons';
import Toast from 'react-bootstrap/Toast';

function ArtMarket() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedBestSeller, setSelectedBestSeller] = useState(null);
  const [showItemAdded, setShowItemAdded] = useState(false);
  const [showSizeRequired, setShowSizeRequired] = useState(false);

  const handleShowItemAdded = () => {
    setShowItemAdded(true);
  };

  const handleSizeRequired = () => {
    setShowSizeRequired(true);
  };

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
          <ArtMarketButtons
            selectedStyle={selectedStyle}
            handleStyleSelect={handleStyleSelect}
            selectedBestSeller={selectedBestSeller}
            handleBestSellerSelect={handleBestSellerSelect}
            handleReset={handleReset}
          />
        </Row>
        <Row className="d-flex justify-content-around p-4">
          {filteredItems.map((item, index) => (
            <Col xl={3} lg={4} sm={6} xs={12} key={index} className='mt-4'>
              <ItemCard item={item} handleShowItemAdded={handleShowItemAdded} handleSizeRequired={handleSizeRequired} />
            </Col>
          ))}
        </Row>
      </Row>
        <Toast onClose={() => setShowItemAdded(false)} show={showItemAdded} delay={3000} autohide
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px', 
          zIndex: '1000',
          backgroundColor: '#ed217c',
          color: '#fffb0a'
        }}
        >
          <Toast.Body>Added to Cart!</Toast.Body>
        </Toast>
        <Toast onClose={() => setShowSizeRequired(false)} show={showSizeRequired} delay={3000} autohide
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px', 
          zIndex: '1000',
          backgroundColor: '#ed217c',
          color: '#fffb0a'
        }}
        >
          <Toast.Body>Please Select Size.</Toast.Body>
        </Toast>
    </div>
  );
}

export default ArtMarket;
