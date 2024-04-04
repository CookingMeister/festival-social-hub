import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className='navBar'>
          <Navbar.Brand href="/" style={{ color: '#FFFB0A', padding: '10px'  }}>Custom Festival Wear</Navbar.Brand>
            <Nav style={{ display: 'flex', flexDirection: 'row' }}>
              <Nav.Link href="/" className='navLink' style={{ color: '#FFFB0A', padding: '5px' }}>Home</Nav.Link>
              <Nav.Link href="/profile" style={{ color: '#FFFB0A', padding: '5px'  }}>Profile</Nav.Link>
              <Nav.Link href="/design" style={{ color: '#FFFB0A', padding: '5px'  }}>Design</Nav.Link>
            </Nav>
      </Navbar>
    </div>
  );
}

export default Header;