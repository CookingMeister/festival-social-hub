import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CarouselImage from '../components/CarouselImage';
import GoogleSearch from '../components/GoogleSearch';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>  
      <Row className="d-flex justify-content-around align-items-center">
        <Col
          xs={6}
          sm={4}
          md={4}
          lg={4}
          xl={3}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="/logo.png"
            style={{ backgroundImage: 'contain', width: '80%' }}
            roundedCircle
          />
        </Col>
        <Col xs={8} sm={8} md={7} lg={5} xl={4}>
          <Link to="/artmarket">
            <CarouselImage />
          </Link>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4">
        <GoogleSearch />
      </Row>
    </div>
  );
}

export default Home;
