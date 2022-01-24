const Person = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  );
};

const isDuplicate = (personNew, personOld) => {
  return personNew.name == personOld.name;
}

export default Person;
export {isDuplicate};