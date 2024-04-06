import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Profile({ welcome }) {
  const [name, setName] = useState('');
  const [socials, setSocials] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [topFestivals, setTopFestivals] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:3000/api/users/profile', {
        name,
        socials,
        aboutMe,
        topFestivals,
      });
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <h1 className="text-center">Profile</h1>
      <h3 className="text-center">
        {welcome ? `Welcome ${welcome}` : 'Welcome Thirsty Traveller'}
      </h3>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="socials">
            <Form.Label>Socials:</Form.Label>
            <Form.Control
              type="text"
              value={socials}
              onChange={(e) => setSocials(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="aboutMe">
            <Form.Label>About Me:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="topFestivals">
            <Form.Label>Top Festivals:</Form.Label>
            <Form.Control
              type="text"
              value={topFestivals.join(', ')}
              onChange={(e) =>
                setTopFestivals(
                  e.target.value.split(',').map((item) => item.trim())
                )
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
};

export default Profile;
