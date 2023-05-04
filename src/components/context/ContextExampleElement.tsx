import React, { useContext } from "react";
import CountContext from "./CountContext";
import { CountContextObject } from "./CountContext";

function ContextExampleElement() {
  const countCtx = useContext(CountContext) as CountContextObject;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    countCtx.setCount((prevValue: number) => prevValue + 1);
  };

  return (
    <>
      <h5>The count from the context: {countCtx.count}</h5>
      <button onClick={handleClick}>Click to increase the context count</button>
    </>
  );
}

export default ContextExampleElement;
