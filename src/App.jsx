import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Students from "./Students";

function App(){
  // const [count, setCount]= useState(0);
  
  // const handleChange=()=>{
  //   setCount(count + 1);
  // }

  const [text,setText]= useState("");

  return(
   <>
    {/* <Header /> */}
    {/* <Students name="Mohit Kumar" course="JS"/>
    <Students name="Rohit Kumar" course="React"/>
    <Students name="Amit Kumar" course="NodeJS"/> */}
    {/* <p>Count: {count}</p>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>Reset</button> */}
    <h1>Hello React</h1>
    <input 
    type= "text"
    onChange={(e)=>setText(e.target.value)}
    />
    <p>{text}</p>
    {/* <Footer /> */}
   </>
  )
}
export default App