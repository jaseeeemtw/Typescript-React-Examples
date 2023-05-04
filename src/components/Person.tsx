import { PersonProps } from "./PersonProps.types";

const Person = ({ person }: PersonProps) => (
  <div>
    <p>
      {person.first} {person.last}
    </p>
  </div>
);

export default Person;
