type HorizontalValues = "right" | "center" | "left";
type VericalValues = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalValues}-${VericalValues}`, "center-center">
    | "center";
};

function Toast({ position }: ToastProps) {
  return <div>Toast position - {position}</div>;
}

export default Toast;
