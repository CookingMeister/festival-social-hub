import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate username
    if (username.trim() === '') {
      setUsernameError('Username is required');
      return;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    try {
      // Send the username and password to the server
      console.log('Login:', username, password);
      const response = await axios.post('/api/login', {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('New Token:', token);
      setIsLoggedIn(true); // Update the login state in the parent component
      // Redirect to profile page
      navigate('/profile');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="d-flex justify-content-center vh-100">
      <Form onSubmit={handleLogin} className="w-25" style={{color: 'antiquewhite'}}>
        <h1 className='my-5'>Login</h1>
        <Form.Group controlId="formUsername" className="mt-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={!!usernameError}
          />
          <Form.Control.Feedback type="invalid">
            {usernameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="warning" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;
