type GreetProps = {
  name: string;
  age?: number;
  id?: number;
};

const Greet = (props: GreetProps) => {
  const { id = 0 } = props;
  const message =
    props.age !== undefined
      ? `Hello ${props.name}! your age is ${props.age}. id is ${id}`
      : `Hello ${props.name}!. id is ${id}`;

  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};

export default Greet;
