import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function Profile({ welcome, user }) {
  const [form, setForm] = useState({
    name: user?.name,
    socials: user?.socials,
    aboutMe: user?.aboutMe,
    topFestivals: user?.topFestivals,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('form:', form);
    setLoading(false);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
    // console.log('name:', name);
    // console.log('value:', value);
    // console.log('form:', form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/users/profile', form, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
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
    <div style={{ minHeight: '100vh' }}>
      <div
        style={{
          backgroundImage: 'url("/topbanner.png")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
          height: '20vh',
          marginTop: '-1%',
          marginBottom: '-1%',
        }}
      />
      <Container>
        <h1 className="text-center p-2 mb-5 text-white">
          {welcome ? `Welcome ${welcome}` : 'Welcome Thirsty Traveller'}
        </h1>
        <Row style={{ color: 'antiquewhite' }}>
          <Col xs={12} md={4} lg={4} style={{ color: 'antiquewhite' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/logo.png"
                style={{ width: '50%', margin: '2rem' }}
                roundedCircle
              />
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} style={{ color: 'antiquewhite' }}>
            <Form
              onSubmit={handleSubmit}
              style={{ width: '80%', margin: '0 auto' }}
            >
              <Form.Group controlId="name">
                <Form.Label className="mt-2">Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder={user.name ? user.name : 'Add name'}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="socials">
                <Form.Label className="mt-2">Socials:</Form.Label>
                <Form.Control
                  type="text"
                  name="socials"
                  value={form.socials}
                  placeholder={
                    user.socials.length > 0
                      ? user.socials.join(', ')
                      : 'Add socials'
                  }
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="aboutMe">
                <Form.Label className="mt-2">About Me:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="aboutMe"
                  value={form.aboutMe}
                  placeholder={user.aboutMe ? user.aboutMe : 'Add about me'}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="topFestivals">
                <Form.Label className="mt-2">Top Festivals:</Form.Label>
                <Form.Control
                  type="text"
                  name="topFestivals"
                  value={form.topFestivals}
                  placeholder={
                    user.topFestivals.length > 0
                      ? user.topFestivals.join(', ')
                      : 'Add top festivals'
                  }
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                className="mt-3"
                style={{
                  backgroundColor: '#ED217C',
                  color:  '#FFFB0A',
                  textShadow: '1px 1px 3px #000000',
                }}
              >
                Update Profile
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
  user: PropTypes.object,
};

export default Profile;
