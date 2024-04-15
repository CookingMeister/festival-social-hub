import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';
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
  const [file, setFile] = useState(
    sessionStorage.getItem('profilePic') || './logo.png'
  );
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showToast, setShowToast] = useState(false);

  //to change profile pic
  function handleProfilePicChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile(imageUrl);
      sessionStorage.setItem('profilePic', imageUrl); // Save to sessionStorage
    }
    setShowSaveButton(true);
  }

  //defaults profile pic to biz logo
  const handleError = () => {
    setFile('./logo.png'); // Fallback to default image if error occurs
  };

  //saves profile pic to session storage
  useEffect(() => {
    const savedImageUrl = sessionStorage.getItem('profilePic');
    if (savedImageUrl) {
      setFile(savedImageUrl); // Retrieve from sessionStorage
    } else {
      setFile('./logo.png'); // Set default image
    }
  }, []);

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

  //saves profile pic
  const saveImage = () => setShowSaveButton(false);

  // updates profile info
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
      setShowToast(true); // Show the toast
      setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setShowDeleteConfirm(true); // Show the confirmation modal
  };

  // deletes user profile
  const handleDeleteConfirm = async () => {
    try {
      await axios.delete('/api/users/profile', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      sessionStorage.removeItem('profilePic');
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
                src={file}
                onError={handleError}
                style={{ width: '70%', margin: '2rem', marginTop: '5%' }}
                roundedCircle
                border="5px solid #ED217C"
              />
            </div>
            <div className="d-flex justify-content-evenly mt-3 mb-5 mb-md-1">
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
                  }}
                >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 18 18"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
                {' '}Update
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 18 18"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>{' '}
                Profile
              </Button>
            </Form>
          </Col>
        </Row>
        <Modal
          style={{ marginTop: '10%' }}
          show={showDeleteConfirm}
          onHide={() => setShowDeleteConfirm(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: '#ED217C' }}>
              Delete Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your profile? This action cannot be
            undone.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteConfirm(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>{' '}
              Profile
            </Button>
          </Modal.Footer>
        </Modal>
        <div style={{ position: 'fixed', bottom: 50, right: 30, zIndex: 1050 }}>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
            style={{ borderRadius: '12px' }}
          >
            <Toast.Header
              style={{ backgroundColor: '#ED217C', color: '#FFFB0A' }}
            >
              <strong className="m-auto">Profile Updated</strong>
            </Toast.Header>
            <Toast.Body
              className="text-center"
              style={{ backgroundColor: '#FFFB0A', color: '#000' }}
            >
              Your profile has been successfully updated!
            </Toast.Body>
          </Toast>
        </div>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
  user: PropTypes.object,
};

export default Profile;
