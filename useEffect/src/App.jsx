import { useState,useEffect } from "react";


const App=()=>{
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response=>response.json()))
    .then(data=>{
      setUsers(data);
    });
  },[]);

  return (
    <div>
<h1>User Data</h1>
{users.map(user=>(
  <div key={user.id}>
<h2>{user.name}</h2>
<p>Email: {user.email}</p>
<p>City: {user.address.city}</p>
  </div>
))}
    </div>
  )
}
export default App;