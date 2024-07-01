// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Table } from 'react-bootstrap';


// function Home({users}) {
//     const navigate=useNavigate();
//     function onCreate(){
//          navigate('/createform')
//     }
//   return (
//     <div>
//         <button onClick={onCreate}>Create</button>

//         <h3>User Details</h3>
//         <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>City</th>
//           <th>Address</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user,index)=>(
//           <tr key={index}>
//             <td>{user.name}</td>
//             <td>{user.age}</td>
//             <td>{user.city}</td>
//             <td>{user.address}</td>
//             <td>
//               <button>Edit</button>
//               <button>Delete</button>
//             </td>
//           </tr>
//         ))}
        
//       </tbody>
//     </Table>


  
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../slices/CreateSlice';


function Home() {
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    function onCreate(){
         navigate('/createform')
    }

    function onEdit(index){
      navigate(`/editform/${index}`)
    }

    function deleteHandler(index){
      dispatch(deleteUser(index))
    }
  return (
    <div>
        <button onClick={onCreate}>Create</button>
        <h3>User Details</h3>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.city}</td>
            <td>{user.address}</td>
            <td>
              <button onClick={()=> onEdit(index)}>Edit</button>
              <button onClick={()=>deleteHandler(index)}>Delete</button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </Table>


  
    </div>
  )
}

export default Home