import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

function Profile({ welcome }) {
  return (
    <div>
      <h1 className="text-center">Profile</h1>
      <h3 className="text-center">
        {welcome ? `Welcome ${welcome}` : 'Welcome Thirsty Traveller'}
      </h3>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          eveniet! Optio eum suscipit quos dolorem perferendis itaque adipisci
          fuga ducimus sapiente assumenda? Eum assumenda nostrum accusantium
          veritatis sit odit cupiditate.
        </p>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string,
};

export default Profile;
