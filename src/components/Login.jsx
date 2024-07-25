import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



export default function Login() {
const dispatch = useDispatch()
 

  return (
    <>
      <NavLink to="/home" ><button onClick={() => dispatch({type : "login"}) }>Login</button></NavLink>
    </>
  );
}
