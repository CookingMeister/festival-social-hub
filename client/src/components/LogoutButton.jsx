import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const logout = async (navigate, setIsLoggedIn) => {
  try {
    // Make a POST request to the server's logout endpoint
    await axios.post('http://localhost:3000/api/logout');

    // Remove the JWT token from local storage or cookies
    localStorage.removeItem('token');
    console.log('Logout successful');
    setIsLoggedIn(false);
    // Redirect the user to the login page
    navigate('/');
  } catch (error) {
    console.error('Logout failed', error);
    // Handle any error scenarios
  }
};

const LogoutButton = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate, setIsLoggedIn);
  };

  return (
    <Button
      variant="link"
      onClick={handleLogout}
      className='mx-2'
      style={{ color: '#FFFB0A', padding: '1px', textDecoration: 'none' }}
    >
      Logout
    </Button>
  );
};

LogoutButton.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
  };  

export default LogoutButton;
