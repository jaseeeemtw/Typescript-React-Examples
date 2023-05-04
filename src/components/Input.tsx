type InputType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputType) {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
}

export default Input;
