type StatusProps = {
  status: "GET" | "POST" | "PUT";
};

function StatusMessage(props: StatusProps) {
  if (props.status === "GET") {
    return <p>It is a GET status</p>;
  }
  if (props.status === "POST") {
    return <p>It is a POST status</p>;
  }
  return <p>It is a PUT status</p>;
}

export default StatusMessage;
