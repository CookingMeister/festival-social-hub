import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
  };

  // pw validation for min length
  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }
  };

  //creates new user
  const handleRegister = async (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    console.log('Registration data:', username, email, password);
    try {
      const response = await axios.post(
        '/api/register',
        {
          username,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Registration response:', response);
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Token:', token);
      // Set isLoggedIn to true in the parent component
      setIsLoggedIn(true);
      // Redirect to profile page
      navigate('/profile');
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center vh-100">
      {/* <h1>Register</h1> */}
      <Form onSubmit={handleRegister} className="w-25 mt-5" style={{color: 'antiquewhite'}}>
        <h1 className='mb-5'>Register</h1>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            isInvalid={!!emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="warning" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </div>
  );
};

Register.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};


export default Register;
