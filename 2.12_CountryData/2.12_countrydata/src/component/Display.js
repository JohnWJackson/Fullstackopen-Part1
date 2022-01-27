const Display = ({country}) => {
  console.log("HERE");
  const languagesArr = Object.values(country.languages);
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

export default Display;