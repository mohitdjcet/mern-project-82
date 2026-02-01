// import Child from "./Child";

import { useEffect, useState } from "react";

// function App() {
//   // const showMsg = () =>{
//   //   alert("Button Clicked");
//   // }

//   const getData = (data) =>{
//     console.log("Child Data", data);
//   }
//   return(
//     <>
//     {/* <Child showMsg = {showMsg}/> */}
//     <Child getData = {getData}/>
//     </>
//   )
// }

// export default App;

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
  },[]);

  console.log(users);
  
  return(
    <div>
      <h1>User List API</h1>

      {
        users.map((user)=> (
          <div key={user.id}>{user.name}</div>
        ))
      }
    </div>
  )
}

export default App;