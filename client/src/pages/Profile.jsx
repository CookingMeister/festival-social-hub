import { useState, useEffect } from 'react';
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: token,
          },
        });
        setUser(response.data);
        setLoading(false);      
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };
    fetchUserProfile();
  }, []);
  
  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        '/api/users/profile',
        {
          name,
          socials,
          aboutMe,
          topFestivals,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        }
      );
      // Handle success
      console.log('Data:', response.data);
      console.log('Profile updated!');
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error
    }
  };

if (loading) {
  return <div>Loading...</div>;
}

 return (
    <div style={{height: '100vh'}}>
      <h1 className="text-center m-4">Profile</h1>
      <h3 className="text-center p-2">
        {welcome ? `Welcome ${welcome}` : 'Welcome Thirsty Traveller'}
      </h3>
      <Container >
        <Form onSubmit={handleSubmit} style={{ width: '60%', margin: '0 auto' }}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder={user.name ? user.name : 'Add name'}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="socials">
            <Form.Label>Socials:</Form.Label>
            <Form.Control
              type="text"
              value={socials}
              placeholder={
                user.socials && user.socials.size > 0
                  ? Array.from(user.socials.values()).join(', ')
                  : 'Add socials'
              }
              onChange={(e) => setSocials(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="aboutMe">
            <Form.Label>About Me:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={aboutMe}
              placeholder={user.aboutMe ? user.aboutMe : 'Add about me'}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="topFestivals">
            <Form.Label>Top Festivals:</Form.Label>
            <Form.Control
              type="text"
              value={topFestivals.join(', ')}
              placeholder={
                user.topFestivals.length > 0 ? user.topFestivals.join(', ') : 'Add top festivals'
              }
              onChange={(e) =>
                setTopFestivals(
                  e.target.value.split(',').map((item) => item.trim())
                )
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Update Profile
          </Button>
        </Form>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
  social: PropTypes.string,
  about: PropTypes.string,
  top: PropTypes.string,
};

Profile.propTypes = {
  welcome: PropTypes.string,
};

export default Profile;
