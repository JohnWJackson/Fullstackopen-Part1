import React, { useState, useEffect } from 'react'
import { isDuplicate } from './components/Person'
import personsService from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setNewSearch] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
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

    const duplicatePerson = persons.find(p => p.name === personObject.name);
    if (duplicatePerson) {
      editPerson(personObject, duplicatePerson);
    }
    else { // Not a duplicate
      setMessage(`Added ${personObject.name}`);
      setTimeout(() => {setMessage(null)}, 5000);
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const editPerson = (newPersonObject, oldPerson) => {
    if (window.confirm(`${oldPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
      personsService
        .update(oldPerson.id, newPersonObject)
        .then(response => {
          setMessage(`Edited ${oldPerson.name}'s number to ${newPersonObject.number}`);
          setPersons(persons.map(p => p.id !== response.data.id ? p : response.data));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          setError(`${newPersonObject.name} was already deleted from the server`);
          setPersons(persons.filter(p => p.id !== newPersonObject.id));
      })
      setTimeout(() => {setMessage(null)}, 5000);
    }
  }

  const deletePerson = (event) => {
    if (window.confirm(`Delete ${event.name}?`))
    {
      personsService
        .deletePersons(event.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== event.id))
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
      <Notification message={message} />
      <Notification message={error} error={true} />
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} 
                  newName={newName} 
                  handlePersonChange={handlePersonChange}
                  newNumber={newNumber} 
                  handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons searchFilter={searchFilter}
               deletePerson={deletePerson} />
    </div>
  )
}

export default App
