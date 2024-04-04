import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
            <Image src="/public/logo.png" roundedCircle />
        </Col>
        <Col xs={8}>2 of 3</Col>
      </Row>
      <Row>
        <Col xs={8}>1 of 3</Col>
        <Col xs={4}>2 of 3</Col>
      </Row>
    </Container>
  );
}

export default Home;