import React, { useReducer } from "react";

type ReducerState = {
  count: number;
};

// spliting action types is called discriminated unions and is the recommended approach for defining the types associated with a reducer function.
type ResetAction = {
  type: "reset";
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

const initialState = { count: 0 };

const reducerFunction = (
  state: ReducerState,
  action: ResetAction | UpdateAction
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CountReducerExample() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "increment", payload: 2 });
  };
  const handleDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "decrement", payload: 1 });
  };
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h4>The count is : {state.count}</h4>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default CountReducerExample;
