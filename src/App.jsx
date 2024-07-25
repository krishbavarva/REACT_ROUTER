// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import ProductDetails from './components/ProductDetail';
// import ProductsList from './components/ProductList';
import Login from './components/Login';
import ProtectedRoutes from './until/ProtectedRouts'; // Check this import path
import { useSelector } from 'react-redux';
// import Profile from './components/Profile';

function App() {
//  const { isAuthentication } = useSelector(state => state.root);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />} /> 
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
