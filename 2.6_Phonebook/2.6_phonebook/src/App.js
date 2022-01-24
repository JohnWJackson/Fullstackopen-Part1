import React, { useState } from 'react'

const Person = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  );
};

const isDuplicate = (personNew, personOld) => {
  return personNew.name == personOld.name;
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '718-619-6502'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    let duplicate = false;
    persons.forEach(p => {
      if(isDuplicate(personObject, p)) {
        duplicate = true;
        alert(`${personObject.name} is already added to phonebook.`)
      }
    })

    if (!duplicate) {
      setPersons(persons.concat(personObject));
      setNewName('');
    }
  }

  const addNumber = (event) => {

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
          number: <input 
                  value={newNumber}
                  onChange={handleNumberChange}
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
