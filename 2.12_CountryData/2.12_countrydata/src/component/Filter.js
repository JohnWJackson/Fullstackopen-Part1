import Country from "./Country";
import Display from "./Display";
import Button from "./Button";
import { handleButton } from "./Button";

const Filter = ({searchFilter}) => {
  if (searchFilter.length == 1) {
    return <Display country={searchFilter[0]} />
  }

  if (searchFilter.length > 9) {
    return (
    <p> Too many matches, specify another filter </p>
    )
  }
  return (
    <div>
      {searchFilter.map(country => {
        return (
        <div key={country.name.common}>
          <Country country={country} />
          <button onClick={() => handleButton(country)} type="button">Show</button>
        </div>
        )
      }
      )}
    </div>
  )
}


export default Filter;