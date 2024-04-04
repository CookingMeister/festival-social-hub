import PropTypes from 'prop-types';

function Profile({ welcome }) {
  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome {welcome}</h2>
    </div>
  );
}

Profile.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default Profile;