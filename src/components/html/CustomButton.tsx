//ommit is used to remove that type from the children here so that only strings can be passed

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button
      className={variant === "primary" ? "this-class" : "another-class"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
