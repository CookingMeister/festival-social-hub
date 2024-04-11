import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';

function Header({ isLoggedIn, setIsLoggedIn }) {

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  return (
    <div>
      <Navbar expand="lg" className="navBar" style={{textShadow: '1px 1px 3px #000000'}}>
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
          {!isLoggedIn && (
            <>
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
            </>
          )}
          {isLoggedIn && (
            <>
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
              <LogoutButton setIsLoggedIn={setIsLoggedIn} />
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;
