
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { editUser } from '../slices/CreateSlice';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
  const { index } =useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.users[index])
 
  const [inputs,setInputs]=useState({
    name: '',
    age: '',
    city: '',
    address: '',
  })
  useEffect(() => {
    if (user) {
      setInputs(user);
    }
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit() {
    dispatch(editUser({ index, user: inputs }));
    navigate('/');
  }


  return (
    <div>
      <h2>Create user details</h2>
      <label>Enter Your Name: </label>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />
      <br />
      <label>Enter Your Age: </label>
      <input
        type="number"
        name="age"
        value={inputs.age}
        onChange={handleChange}
        placeholder="Enter your Age"
      />
      <br />
      <br />
      <label>Enter Your city: </label>
      <input
        type="text"
        name="city"
        value={inputs.city}
        onChange={handleChange}
        placeholder="Enter your city"
      />
      <br />
      <br />
      <label>Enter Your Address: </label>
      <textarea
        placeholder="enter Address"
        name="address"
        value={inputs.address}
        onChange={handleChange}
        rows={4}
        cols={20}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Edit;
