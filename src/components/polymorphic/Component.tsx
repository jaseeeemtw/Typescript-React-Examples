import React from "react";

type ComponentOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  as?: E;
};

type ComponentProps<E extends React.ElementType> = ComponentOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ComponentOwnProps<E>>;

const Component = <E extends React.ElementType = "div">({
  size,
  color,
  as,
  children,
  ...rest
}: ComponentProps<E>) => {
  const Element = as || "div";
  return (
    <Element className={`element-${size}-${color}`} {...rest}>
      {children}
    </Element>
  );
};

export default Component;
