import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CarouselImage from '../components/CarouselImage'

function Home() {
  return (
    <>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} className='d-flex justify-content-center align-items-center'>
            <Image src="/logo.png" style={{ backgroundImage: 'contain', width: '80%' }} roundedCircle />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
            <CarouselImage />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>1 of 3</Col>
        <Col xs={4}>2 of 3</Col>
      </Row>
    </>  
  );
}

export default Home;