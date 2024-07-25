
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetail'
import ProductsList from './components/ProductList'
import Login from './components/Login'
import ProtectedRoutes from './until/ProtectedRouts'
import { useSelector } from 'react-redux'
import Profile from './components/Profile'


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/*' element={<ProtectedRoutes/>} />
        
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
