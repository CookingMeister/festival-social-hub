import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Design() {
  return (
    <div style={{ minHeight: '100vh', position:'relative' }}>

      <Row className="d-flex justify-content-center">
          <Image
            src="/Udesignlogo.png"
            style={{
              backgroundImage: 'contain',
              width: '300px',
              height: '260px',
              marginBottom: '2rem',
            }}
          />
        </Row>

      <h1 className="text-center text-white">Design Hello </h1>

    </div>
  );
}

export default Design;