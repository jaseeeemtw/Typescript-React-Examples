type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return <h4>{props.children}</h4>;
}

export default Heading;
