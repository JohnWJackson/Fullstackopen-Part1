import axios from "axios";
import { useState, useEffect } from 'react';

const Country = ({country}) => {
  return (
    <li>{country.name.common}</li>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);
  
  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  }

  const searchFilter = countries.filter(country => country.name.common
                                                  .toLowerCase()
                                                  .includes(search));

  return (
    <div>
      <div>
        find countries <input 
                        value={search}
                        onChange={handleSearch}
                      />
      </div>
      <ul>
        {searchFilter.map(country => 
          <Country key={country.name.common} 
                        country={country} />
        )}
      </ul>

    </div>
  );
}

export default App;
