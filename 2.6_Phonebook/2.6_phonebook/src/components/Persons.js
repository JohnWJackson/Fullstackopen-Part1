import Person from './Person'

const Persons = ({searchFilter, deletePerson}) => {
  return (
    <ul>
      {searchFilter.map(p => 
        <Person key={p.name} 
                person={p} 
                deletePerson={deletePerson} />
      )}
    </ul>
  )
}

export default Persons