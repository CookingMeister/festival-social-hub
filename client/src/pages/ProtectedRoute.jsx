// import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
