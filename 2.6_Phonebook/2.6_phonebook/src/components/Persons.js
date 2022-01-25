import Person from './Person'

const Persons = ({searchFilter}) => {
  return (
    <ul>
      {searchFilter.map(p => 
        <Person key={p.name} person={p} />
      )}
    </ul>
  )
}

export default Persons