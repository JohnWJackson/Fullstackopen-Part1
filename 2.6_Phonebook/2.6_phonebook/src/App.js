import React, { useState } from 'react'
import Person, { isDuplicate } from './components/person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto',
      number: '718-518-4312'
    },
    { name: 'John',
      number: '718-619-6502'
    },
    { name: 'Elsie',
      number: '201-210-2521'
    },
    { name: 'Nemo',
      number: '718-619-5432'
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('');
  
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

  const personSearch = (event) => {
    setNewSearch(event.target.value);       
  }

  const searchFilter = persons.filter(p => p.name
                                            .toLowerCase()
                                            .includes(search));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
                            value={search}
                            onChange={personSearch}
                          />
      </div>
      <h2>Add a new</h2>
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
        {searchFilter.map(p => 
          <Person key={p.name} person={p} />
        )}
      </ul>
    </div>
  )
}

export default App
