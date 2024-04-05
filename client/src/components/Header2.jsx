import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: '#FFFB0A', padding: '10px' }}
        >
          Custom Festival Wear
        </Navbar.Brand>
        <Nav style={{ display: 'flex', flexDirection: 'row' }}>
          <Nav.Link
            as={Link}
            to="/"
            className="navLink"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/register"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Register
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/profile"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/design"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Design
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/artmarket"
            style={{ color: '#FFFB0A', padding: '5px' }}
          >
            Art Market
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
