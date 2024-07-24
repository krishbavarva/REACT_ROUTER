import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <>
     <div className='navbar' >
       <NavLink  to="/"><li>Home</li></NavLink>  
       <NavLink to="/about"><li>About</li></NavLink>
       <NavLink to="/contact"> <li>Contact</li></NavLink> 
       <NavLink to="/products"> <li>Products</li></NavLink> 
       <NavLink to="/login"> <li>Login</li></NavLink> 
       <NavLink to="/profile"> <li>Profile</li></NavLink> 
    </div> 
    </>
  )
}
