const Person = ({person, deletePerson}) => {
  return (
    <li>
      {person.name} 
      {person.number}
      <button type="button" onClick={deletePerson.bind(this, person.id)}>Delete</button>
    </li>
  );
};

const isDuplicate = (personNew, personOld) => {
  return personNew.name == personOld.name;
}

export default Person;
export {isDuplicate};