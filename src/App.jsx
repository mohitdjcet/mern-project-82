import { useReducer } from "react";
import { counterReducer, initialState} from "./reducer/counterReducer";
import FormState from "./FormState";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Count, {state.count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
      <FormState />
    </div>
  );
}

export default App;

//UI -> dispatch(action) -> reducer(state, action) -> newSate -> UI Update