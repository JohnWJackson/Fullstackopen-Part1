import React, { useState, useEffect } from 'react'
import { isDuplicate } from './components/Person'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value);       
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
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
      setPersons(persons.concat(response.data));
      setNewName('');
      })
    }
  }

  const searchFilter = persons.filter(p => p.name
                                            .toLowerCase()
                                            .includes(search)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} 
                  newName={newName} 
                  handlePersonChange={handlePersonChange}
                  newNumber={newNumber} 
                  handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons searchFilter={searchFilter} />
    </div>
  )
}

export default App
