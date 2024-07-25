// Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setName } from '../Action'; // Import the setName action

export default function Login() {
  const { isAuthentication } = useSelector(state => state.root);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setName(input)); 
    dispatch({type :"login"})
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {!isAuthentication && (
        <NavLink to="/home">
          <button onClick={handleSubmit}>Login</button>
        </NavLink>
      )}
    </>
  );
}
