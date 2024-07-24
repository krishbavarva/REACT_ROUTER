import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetail'
import ProductsList from './components/ProductList'


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
        {/* passing a product id is dynamic routing */}
        {/* in this line use a nasted routing, i call child node using parent node */}
        <Route path="/products/:producttName" element={<ProductDetails/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
