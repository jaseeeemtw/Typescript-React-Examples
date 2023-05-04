import React from "react";

export type CountContextObject = {
  count: number ;
  setCount: React.Dispatch<React.SetStateAction<number >>;
};

const CountContext = React.createContext<null | CountContextObject>(null);

export default CountContext;
