import "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import Container from "./components/Container";
import ContextExampleElement from "./components/context/ContextExampleElement";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import CountReducerExample from "./components/reducer/CountReducerExample";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import StatusMessage from "./components/StatusMessage";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const persons = [
    { first: "abc", last: "def" },
    { first: "abc1", last: "def1" },
    { first: "abc2", last: "def2" },
  ];

  return (
    <div className="App">
      <Greet key={1} name="newName" id={3} />
      <Greet key={2} name="name1" age={23} />
      <Person person={personName} />
      <PersonList persons={persons} />
      <StatusMessage status="GET" />
      <Heading>hello world!</Heading>
      <Container>
        <Heading>Hi There!</Heading>
      </Container>
      <Button
        handleClick={(event) => {
          console.log("button clicked!");
        }}
      />
      <Input
        value="initial"
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <Box
        style={{
          backgroundColor: "blue",
          width: "100px",
          height: "100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <LoggedIn />
      <User />
      <CountReducerExample />
      <ContextExampleElement />
    </div>
  );
}

export default App;
