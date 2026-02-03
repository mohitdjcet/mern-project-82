// import { Children } from "react";
// import useCounter from "./useCounter";

import Card from "./Card";

function App() {
  // const { count, incerement, decrement, reset } = useCounter(null);
  return (
    // <>
    //   <h1> Count : {count}</h1>
    //   <button onClick={incerement}>Incerement</button>
    //   <button onClick={decrement}>Decrement</button>
    //   <button onClick={reset}>Reset</button>
    // </>

    <Card>
      <h1> Hello from Card Component </h1>
      <p> This is a simple card component to wrap content. </p>
    </Card>
  );
}

export default App;