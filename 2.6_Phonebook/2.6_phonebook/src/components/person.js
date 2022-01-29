const Person = ({person, deletePerson}) => {
  return (
    <li>
      {person.name}
      {' - '}
      {person.number}
      <button type="button" onClick={deletePerson.bind(this, person)}>Delete</button>
    </li>
  );
};

export default Person;