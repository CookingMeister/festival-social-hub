import { Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Header2 from './components/Header2';
import Home from './pages/Home';
import ProtectedProfile from './pages/ProtectedProfile';
import Design from './pages/Design';
import Footer from './components/Footer';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';

const App = () => {
  return (
    <>
    <Header2 />
      {/* <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
              <ProtectedProfile />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
    <Footer />
    </>
  );
};

export default App;
