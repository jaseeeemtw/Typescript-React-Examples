export type ChildProps = {
  val: number;
};

function anotherComponent({ val }: ChildProps) {
  return (
    <div>
      <h5>Child Component</h5>
      <p>The value is {val}</p>
    </div>
  );
}

export default anotherComponent;
