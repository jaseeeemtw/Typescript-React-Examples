import { useEffect, useRef } from "react";

function RefExample() {
  //   const ref = useRef<HTMLInputElement>(null);

  // if we are sure that the ref will not be used with out having null value, we can add an '!' after the null so that focus doesn't become an optional method in using ref methods
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <input
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
        type={"input"}
        ref={ref}
      />
    </>
  );
}

export default RefExample;
