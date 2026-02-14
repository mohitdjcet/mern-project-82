import { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/users")
    // .then(res =>{
    //   if(!res.ok) throw new Error("API call failed");
    //   return res.json();
    // })
    // .then(data => setUsers(data))
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  },[]);

  console.log(users,"users",error,"error",loading,"loading");
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error}</h1>

  return (
    <>
     <h1>Users(API)</h1>
     {
      users.map( user =>(
        <p key={user.id}>{user.name}</p>
      ))
     }
    </>
  );
}

export default App;