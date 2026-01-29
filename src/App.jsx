import React, { useRef } from "react";

function App() {
  // const inputRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Name:", inputRef.current.value);
  // }
  // const [name, setName] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Name:",name);
  // }
  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e)=> setName(e.target.value)}
    //     />
    //     <button type="submit">Submit</button>
    // </form>

    // <form onSubmit={handleSubmit}>
    //   <input type="text" ref={inputRef} />
    //   <button type="submit">Submit</button>
    // </form>

    // <React.Fragment>
    //   <h1>Hello, World!</h1>
    //   <p>Welcome</p>
    // </React.Fragment>

   <>
  {[1, 2, 3].map((num) => (
    <React.Fragment key={num}>
      <h1>Heading {num}</h1>
      <p>This is paragraph {num}</p>
    </React.Fragment>
  ))}
</>

  );
}
export default App;
