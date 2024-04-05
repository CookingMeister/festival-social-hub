import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import ArtMarket from './pages/ArtMarket';
import Header from './components/Header2';
import Home from './pages/Home';
import ProtectedPage from './pages/ProtectedProfile';
import Design from './pages/Design';
import Footer from './components/Footer';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artmarket" element={<ArtMarket />} />
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
