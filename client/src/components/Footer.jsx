import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//footer styling
function Footer() {
  return (
    <div className="footer mt-5">
      <Navbar expand="lg" static="bottom" className="navBar pt-2">
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Navbar.Brand
            style={{
              color: '#FFFB0A',
              textShadow: '1px 1px 3px #000000',
              paddingTop: '2%',
            }}
          >
            {' '}
            Made with <span style={{ fontSize: '85%' }}>❤️</span> by Triple S
            Productions{' '}
            <p className="text-center">&copy; {new Date().getFullYear()}</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
