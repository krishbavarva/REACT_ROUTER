import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../Action';
import "../css/Profile.css";

export default function Profile() {
  const [data, setData] = useState("");
  const [myModel, setMyModel] = useState(true);
  const [changeModel, setChangeModel] = useState(false);
  const dispatch = useDispatch();

  // Function to handle name change confirmation
  const handleChange = () => {
    if (data.trim() === '') {
      alert('Name cannot be empty');
      return;
    }
    dispatch(changeName(data.trim())); // Use trimmed data
    setData(''); 
    setChangeModel(false);
    setMyModel(true);
  };

  const handleModel = () => {
    setMyModel(false);
    setChangeModel(true);
  };

  const handleNotChange = () => {
    setData(''); 
    setMyModel(true);
    setChangeModel(false);
  };

  // Debugging statement
  console.log("Current input data:", data);

  const Model = () => (
    <div className="model">
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button> 
      <input
        type="textarea"
        value={data}
        required
        onChange={e => setData(e.target.value)}
        placeholder="Enter new name"
        autoFocus
      />
      <button onClick={handleModel}>Update</button>
    </div>
  );

  const CModel = () => (
    <div className="changemodel">
      <h1>Are you sure?</h1>
      <button onClick={handleChange}>Confirm</button>
      <button onClick={handleNotChange}>Cancel</button>
    </div>
  );

  return (
    <>
      {myModel && <Model />}
      {changeModel && <CModel />}
    </>
  );
}
