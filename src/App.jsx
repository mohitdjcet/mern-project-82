import { useEffect, useState } from "react";
import User from "./User";
import Product from "./Product";

function App() {
  const [name,setName] = useState("");

  useEffect(()=>{
    const savedName = localStorage.getItem("name");
    if(savedName){
      setName(savedName);
    }
  },[])

  const saveName = () => {
    localStorage.setItem("name",name);
  }

  const clearName = () => {
    localStorage.removeItem("name");
    setName("");
  }
  return(
    <div>
      <h1>Local Storage Demo</h1>
      <input value={name}
       onChange={(e)=> setName(e.target.value)}
       placeholder="Enter Name"
       />
       <button onClick={saveName}>Save</button>
       <button onClick={clearName}>Clear</button>
       <p>Refresh Page pr data change nhi hoga</p>
       <User />
       <Product />
    </div>
  )
}

export default App;