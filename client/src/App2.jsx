
import { Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ProtectedPage1 from './ProtectedPage1'; // example
import ProtectedPage2 from './ProtectedPage2'; // example

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected1">Protected Page 1</Link>
          </li>
          <li>
            <Link to="/protected2">Protected Page 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/protected1"
          element={
            <ProtectedRoute>
              <ProtectedPage1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/protected2"
          element={
            <ProtectedRoute>
              <ProtectedPage2 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
