import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Navbar.css"
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { isAuthentication } = useSelector(state => state.root)

    return (
      <>
       <div className='navbar' >
         {isAuthentication && <NavLink  to="/home"><li>Home</li></NavLink> } 
         {isAuthentication && <NavLink to="/about"><li>About</li></NavLink>}
         {isAuthentication && <NavLink to="/contact"> <li>Contact</li></NavLink>} 
         {isAuthentication && <NavLink to="/products"> <li>Products</li></NavLink>} 
         {isAuthentication && <NavLink to="/profile"> <li>Profile</li></NavLink> }
         {!isAuthentication && <NavLink to="/login"> <li>Login</li></NavLink> }
      </div> 
      </>
    )
  
}
