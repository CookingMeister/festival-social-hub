import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Design() {
  return (
    <div style={{ minHeight: '100vh', position:'relative' }}>
      <div
        style={{
          backgroundImage: 'url("/topbanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '20vh',
          marginTop: '-1%',
        }}
      />
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
      <div
        style={{
          backgroundImage: 'url("/bottombanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '20vh',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          marginBottom: '-2.5%',
        }}
      />
    </div>
  );
}

export default Design;
