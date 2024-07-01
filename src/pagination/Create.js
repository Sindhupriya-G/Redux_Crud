// import React, { useState } from 'react'

// function Create() {
//   const [input,setInputs]=useState({name:'',age:'',city:'',address:''});
//   const [users,setUsers]=useState([])

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       [name]: value,
//     }));
//   }

//   function addUsers(){
//     if(input.name && input.age && input.city && input.address){
//       setUsers((prevUsers)=>[...prevUsers,input])
//       setInputs({ name: '', age: '', city: '', address: '' });
//       console.log(users);
//     }
//   }
//   return (
//     <div>
//       <h2>Create user details</h2>
//       <label>Enter Your Name:  </label>
//       <input type='text' name='name' value={input.name} onChange={handleChange} placeholder='Enter your name' /><br /><br />
//       <label>Enter Your Age:  </label>
//       <input type='number' name='age' value={input.age} onChange={handleChange} placeholder='Enter your Age' /><br /><br />
//       <label>Enter Your city:  </label>
//       <input type='text' name='city' value={input.city} onChange={handleChange} placeholder='Enter your city' /><br /><br />
//       <label>Enter Your Address:  </label>
//       <textarea placeholder='enter Address' name='address' value={input.address} onChange={handleChange} rows={4} cols={20}/><br /><br />
//       <button onClick={addUsers}>Submit</button>
//     </div>
//   )
// }

// export default Create

import React, { useState } from 'react';
// import Home from '../components/Home';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/CreateSlice';


function Create() {
  const [inputs, setInputs] = useState({ name: '', age: '', city: '', address: '' });
  const dispatch=useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function addUsers() {
    if (inputs.name && inputs.age && inputs.city && inputs.address) {
      // setUsers((prevUsers) => [...prevUsers, inputs]);
      dispatch(addUser(inputs))
      setInputs({ name: '', age: '', city: '', address: '' });
      // console.log(users);
    }
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
      <button onClick={addUsers}>Submit</button>
    </div>
  );
}

export default Create;
