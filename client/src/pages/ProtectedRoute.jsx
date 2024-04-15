import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

// checks if user is logged in
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };
  //  if authenticated, render children else redirect to login page
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
