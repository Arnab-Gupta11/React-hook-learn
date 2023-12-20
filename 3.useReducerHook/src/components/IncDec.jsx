import { useReducer } from "react";

//This function defination can be written inside the component or we can make another comonent for this.
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    if (state > 0) {
      return state - 1;
    }
  }
  return state;
};

const IncDec = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center border-2 p-5">
      <h1 className="text-5xl font-semibold">{state}</h1>
      <button className="btn mt-4 btn-success" onClick={() => dispatch({ type: "INCREMENT" })}>
        INC
      </button>
      <button className="btn mt-4 btn-success ml-5" onClick={() => dispatch({ type: "DECREMENT" })}>
        DEC
      </button>
    </div>
  );
};

export default IncDec;
