// import React from 'react';
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   componentDidMount(){
//     console.log('App component has mounted');
//   }

//   componentDidUpdate(){
//     console.log('App component has updated');
//   }

//   componentWillUnmount(){
//     console.log('App component will unmount');
//   }

//   render(){
//     return (
//       <div>
//         <h1>Welcome to the App</h1>
//         <button onClick={()=> this.setState({
//           count: this.state.count+1
//         })}>Count : {this.state.count}</button>
//       </div>
//     );
//   }
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     console.log("component Did Mount");
//   //   }, 1000);
//   //   console.log("component Did Update");
//   //   return () => {
//   //     clearTimeout(timer);
//   //     console.log("component Will Unmount");
//   //   };
//   // },[]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running");
//     }, 1000);


//     return () => {
//       clearInterval(timer);
//     };
//   },[])

//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <button onClick={() => setCount(count + 1)}>Count : {count}</button>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>useEffect Cleanup Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>

      <br /><br />

      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>

      <br /><br />

      {show && <Timer />}
    </div>
  );
}

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup executed ❌");
      alert("Cleanup Function Called");
    };
  }, []);

  return <h3>⏱ Timer Running...</h3>;
}

export default App;
