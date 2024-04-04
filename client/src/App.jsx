import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Design from './pages/Design';
import Footer from './components/Footer';
import Error from './pages/Error';
import ArtMarket from './pages/ArtMarket';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/design" element={<Design />} />
          <Route path="/artmarket" element={<ArtMarket />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;
