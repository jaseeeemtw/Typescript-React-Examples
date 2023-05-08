import { ChildProps } from "./anotherComponent";

type RootProps = {
  ChildComponent: React.ComponentType<ChildProps>;
  val: number;
};

function RootComponent({ val, ChildComponent }: RootProps) {
  return (
    <div>
      <h4>Root Component</h4>
      <p>The value is {val}</p>
      <ChildComponent val={6} />
    </div>
  );
}

export default RootComponent;
