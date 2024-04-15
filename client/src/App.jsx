import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ArtMarket from './pages/ArtMarket';
import Header from './components/Header';
import Home from './pages/Home';
import ProtectedPage from './pages/ProtectedProfile';
import Design from './pages/Design';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import Error from './pages/Error';
import FlowerTop from './components/FlowerTop';
import FlowerBottom from './components/FlowerBottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const location = useLocation(); // Use useLocation hook here

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [location.search]);

  return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <FlowerTop />
        <Routes>
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/design"
            element={
              <ProtectedRoute>
                <Design />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/artmarket"
            element={
              <ProtectedRoute>
                <ArtMarket />
              </ProtectedRoute>
            }
          />
             <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          {message ? (
            <Message message={message} />
          ) : (
            <Route path="/checkout" element={<CheckoutForm />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
        <FlowerBottom />
        <Footer />
      </>
  );
};

export default App;
