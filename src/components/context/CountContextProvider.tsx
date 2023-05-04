import React, { useState } from "react";
import CountContext from "./CountContext";

type ProviderProps = {
  children: React.ReactNode;
};

function CountContextProvider({ children }: ProviderProps) {
  const [count, setCount] = useState<number>(0);

  const value = {
    count: count,
    setCount: setCount
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

export default CountContextProvider;
