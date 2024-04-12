import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [file, setFile] = useState();
  const [showSaveButton, setShowSaveButton] = useState(false);

  function handleProfilePicChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setShowSaveButton(true);
  }

  useEffect(() => {
    setLoading(false);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

const saveImage = () => setShowSaveButton(false);

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

  const handleDelete = (e) => {
    e.preventDefault();
    setShowDeleteConfirm(true); // Show the confirmation modal
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete('/api/users/profile', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      setShowDeleteConfirm(false); // Close the modal
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting profile:', error);
      setShowDeleteConfirm(false); // Close the modal
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center p-2 mb-5 text-white">
          {welcome ? `Welcome ${welcome}` : 'Welcome Thirsty Traveller'}
        </h1>
        <Row style={{ color: 'antiquewhite' }}>
          <Col xs={12} md={4} lg={4} style={{ color: 'antiquewhite' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={file || './logo.png'}
                style={{ width: '70%', margin: '2rem', marginTop: '5%' }}
                roundedCircle
                border="5px solid #ED217C"
              />
            </div>
            <div className='d-flex justify-content-evenly mt-3 mb-5 mb-md-1'>
              <label className="btn btn-warning" htmlFor="profilePicInput">
                Choose Image
                <input
                  type="file"
                  id="profilePicInput"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  style={{ display: 'none' }}
                />
              </label>
              {showSaveButton && (
                <Button
                  onClick={saveImage}
                  style={{
                    backgroundColor: '#ED217C',
                    outline: '#ED217C',
                    color: '#FFFB0A',
                    textShadow: '1px 1px 3px #000000',
                  }}>
                  Save
                </Button>
              )}
            
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} style={{ color: 'antiquewhite' }}>
            <Form
              onSubmit={handleSubmit}
              style={{ width: '80%', margin: '0 auto', position: 'relative' }}
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
                  color: '#FFFB0A',
                  textShadow: '1px 1px 3px #000000',
                }}
              >
                Update Profile
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
                className="mt-3"
                style={{
                  position: 'absolute',
                  right: '0',
                }}
              >
                Delete Profile
              </Button>
            </Form>
          </Col>
        </Row>
        <Modal style={{ marginTop: '10%' }} show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: '#ED217C' }}>Delete Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete your profile? This action cannot be undone.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>
              Delete Profile
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
  user: PropTypes.object,
};

export default Profile;
