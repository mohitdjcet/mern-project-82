import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
}

export default function FormState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Form State</h1>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <button onClick={()=> dispatch({type: "RESET"})}
      >Submit</button>
    </div>
  );
}
