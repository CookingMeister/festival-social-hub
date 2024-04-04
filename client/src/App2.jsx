
import { Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import ProtectedProfile from './pages/ProtectedProfile';
import Design from './pages/Design';
import Footer from './components/Footer';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
    <Header />
      <nav>
        <ul>
          {/* <li>
            <Link to="/signup">Signup</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<Home />} />
        
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
