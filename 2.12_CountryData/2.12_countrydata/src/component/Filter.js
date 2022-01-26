import Country from "./Country";

const Filter = ({searchFilter}) => {
  if (searchFilter.length == 1) {
    const country = searchFilter[0];
    const languagesArr = Object.values(country.languages);
    console.log(country);
    
    
    
    return (
    <div>
      <h1> {country.name.common} </h1>
      <p> capital: {country.capital[0]} </p>
      <p> population: {country.population} </p>
      <h2> Languages </h2>
      <ul> 
        {languagesArr.reduce(l => <li>{l}</li>)} 
      </ul>
      <img src={country.flags.png}></img>
    </div>
    )
  }
  return (
    <div>
      {searchFilter.length > 9 
      ? "Too many matches, specify another filter" 
      : searchFilter.map(country => 
        <Country key={country.name.common} country={country} /> )}
    </div>
  )
}


export default Filter;