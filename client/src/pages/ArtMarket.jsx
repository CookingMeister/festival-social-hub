import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ItemCard from '../components/ItemCard';
import axios from 'axios';
import ArtMarketButtons from '../components/ArtMarketButtons';
import Toast from 'react-bootstrap/Toast';

function ArtMarket() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedBestSeller, setSelectedBestSeller] = useState(null);
  const [showItemAdded, setShowItemAdded] = useState(false);
  const [showSizeRequired, setShowSizeRequired] = useState(false);
  const [products, setProducts] = useState([]);

  const handleShowItemAdded = () => {
    setShowItemAdded(true);
  };

  const handleSizeRequired = () => {
    setShowSizeRequired(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/products', {
          headers: {
            Authorization: token,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
        if (error.message) {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchItems();
  }, []);

  const isItemInStock = (item) => {
    const foundProduct = products.find(
      (product) => product.name === item.name && product.availability === true
    );
    return foundProduct ? true : false;
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

  const filteredItems = products.filter((product) => {
    if (selectedStyle && selectedBestSeller) {
      return product.category.style === selectedStyle && product.name === selectedBestSeller;
    } else if (selectedStyle) {
      return product.category.style=== selectedStyle;
    } else if (selectedBestSeller) {
      return product.name === selectedBestSeller;
    }
    return true;
  });

  console.log(products);

  return (
    <div className="py-3" style={{ minHeight: '100vh', margin: '0 auto' }}>
      <Row>
        <Row className="d-flex justify-content-center">
          <Image
            src="/artMarketLogo.png"
            style={{
              backgroundImage: 'contain',
              width: '300px',
              height: '260px',
              marginBottom: '2rem',
              marginTop: '-3rem',
              marginLeft: '1.5rem',
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
        <Row className="d-flex justify-content-center p-4" style={{ marginLeft: '1px' }}>
          {filteredItems.map((item, index) => (
            <Col xl={3} lg={4} sm={6} xs={12} key={index} className="mt-4">
              <ItemCard
                item={item}
                isInStock={isItemInStock(item)}
                handleShowItemAdded={handleShowItemAdded}
                handleSizeRequired={handleSizeRequired}
              />
            </Col>
          ))}
        </Row>
      </Row>
      <Toast
        onClose={() => setShowItemAdded(false)}
        show={showItemAdded}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          backgroundColor: '#ed217c',
          color: '#fffb0a',
        }}
      >
        <Toast.Body>Added to Cart!</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowSizeRequired(false)}
        show={showSizeRequired}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          backgroundColor: '#ed217c',
          color: '#fffb0a',
        }}
      >
        <Toast.Body>Please Select Size.</Toast.Body>
      </Toast>
    </div>
  );
}

export default ArtMarket;
