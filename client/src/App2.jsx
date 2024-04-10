import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import ArtMarket from './pages/ArtMarket';
import Header from './components/Header2';
import Home from './pages/Home';
import ProtectedPage from './pages/ProtectedProfile';
import Design from './pages/Design';
import CartModal from './components/CartModal'; // Import CartModal
import Footer from './components/Footer';
import Error from './pages/Error';
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

const App2 = () => {
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
          {message ? (
            <Message message={message} />
          ) : (
            <Route path="/checkout" element={<CartModal />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
  );
};

export default App2;
