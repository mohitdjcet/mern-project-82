// import { useMemo, useState } from "react";
// import "./App.css";

// import { useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(5);

//   // function expensiveData(num) {
//   //   console.log("Calculating...");
//   //   let sum =0;
//   //   for(let i=0; i<1000000000; i++){
//   //     sum += i;
//   //   }
//   //   return sum + num;
//   // }

//   const result = useMemo(() =>{
//   console.log("Calculating...");
//     let sum =0;
//     for(let i=0; i<1000000000; i++){
//       sum += i;
//     }
//     return sum + num;
//   },[num])

//   return (
//     <div>
//       <h2>Result: {result}</h2>
//       <button onClick={()=> setCount(count+1)}>Count: {count}</button>
//     </div>
//   );
// }

// export default App;


// function Child({onClick}) {
//   console.log("Child Render");  
//   return (
//     <div>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// function App() {
//   const handleClick = useCallback(() => {
//     console.log("Button clicked!");
//   },[]);
//   return(
//     <div>
//       <Child onClick={handleClick}/>
//     </div>
//   )
// }

// export default App;

import React, { useState, useCallback } from "react";

// Child component wrapped with React.memo
const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Memoized callbacks
  const incrementCount1 = () => {
    setCount1(prev => prev + 1);
  } // no dependencies — same function always

  const incrementCount2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []); // same here

  console.log("Parent rendered");

  return (
    <div>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <Button onClick={incrementCount1} text="Increase Count1" />
      <Button onClick={incrementCount2} text="Increase Count2" />
    </div>
  );
}

export default App;
