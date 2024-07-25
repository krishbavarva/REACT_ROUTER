// Home.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const name = useSelector(state => state.root.name);

  return (
    <>
      <h1>Welcome to the home page , {name}</h1>
     
    </>
  );
}
