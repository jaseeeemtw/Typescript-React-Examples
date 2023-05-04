type Person = {
  first: string;
  last: string;
};

type PersonListType = {
  persons: Person[];
};

function PersonList(props: PersonListType) {
  return (
    <>
      {props.persons.map((person, index) => {
        return (
          <p key={index}>
            {person.first} {person.last}
          </p>
        );
      })}
    </>
  );
}

export default PersonList;
