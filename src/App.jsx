import React, { useState } from "react";
import "./App.css";

function App() {
  const [ text, setText] = useState("")

  const handleFocus = () => {
    console.log("Input field is focused");
  }
  return (
    <>
    <input 
    type="text" 
    value={text}
    onChange={(e)=>setText(e.target.value)}
    onFocus={handleFocus}
    onBlur={() => console.log("Input field lost focus")}
    />
    <p>Your Text: {text}</p>
    </>
  );
}

export default App;