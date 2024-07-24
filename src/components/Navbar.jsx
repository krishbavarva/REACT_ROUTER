import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <div style={{color:"white"}} >
       <NavLink  to="/"><li>Home</li></NavLink>  
       <NavLink to="/about"><li>About</li></NavLink>
       <NavLink to="/contact"> <li>Contact</li></NavLink> 
       <NavLink to="/products"> <li>Products</li></NavLink> 
    </div> 
    </>
  )
}
