import Country from "./Country";

const Filter = ({searchFilter}) => {
  return (
    <ul>
      {searchFilter.map(country => 
        <Country key={country.name.common} 
                      country={country} />
      )}
    </ul>
  )
}

export default Filter;