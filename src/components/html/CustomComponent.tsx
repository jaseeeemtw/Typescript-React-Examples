// extracting the components prop types

import React from "react";
import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <p>CustomComponent</p>
      <p>name is: {props.name}</p>
    </div>
  );
};

export default CustomComponent;
