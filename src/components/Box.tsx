type BoxProps = {
  style: React.CSSProperties;
};

function Box(props: BoxProps) {
  return <div style={props.style}>Box</div>;
}

export default Box;
