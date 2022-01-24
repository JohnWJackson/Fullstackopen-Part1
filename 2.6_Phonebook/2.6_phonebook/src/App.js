import React, { useState } from 'react'

const Person = ({person}) => {
  return (
    <li>{person.name}</li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
  
    setPersons(persons.concat(personObject));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handlePersonChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => 
          <Person key={p.name} person={p} />
        )}
      </ul>
    </div>
  )
}

export default App
