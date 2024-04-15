import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';

function Header({ isLoggedIn, setIsLoggedIn }) {
  //checks is a user is logged in
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  return (
    <div>
      <Navbar
        expand="lg"
        className="navBar"
        style={{ textShadow: '1px 1px 3px #000000' }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: '#FFFB0A', padding: '10px' }}
        >
          Custom Festival Wear
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-end">
            <Nav.Link
              as={Link}
              to="/"
              className="navLink"
              style={{ color: '#FFFB0A', padding: '5px' }}
            >
              Home
            </Nav.Link>
            {/** nav links when no user is logged in */}
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
            {/** nav links after user is logged in */}
            {isLoggedIn && (
              <>
                <Nav.Link
                  as={Link}
                  to="/admin"
                  style={{ color: '#FFFB0A', padding: '5px' }}
                >
                  Admin
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
                <LogoutButton setIsLoggedIn={setIsLoggedIn} />
                <Nav.Link
                  as={Link}
                  to="/checkout"
                  style={{ color: '#FFFB0A', padding: '5px' }}
                >
                  Checkout{' '}
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 18"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

//proptype validation
Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;
