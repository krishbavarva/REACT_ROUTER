import React, { useState } from 'react';
import { useDispatch } from 'react-redux';




export default function Login() {
const dispatch = useDispatch()
 

  return (
    <>
      <button onClick={() => dispatch({type : "login"}) }>Login</button>
    </>
  );
}
