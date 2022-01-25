import axios from "axios";
import { useState, useEffect } from 'react';
import Filter from './component/Filter';

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
                                                  .includes(search.toLowerCase()));

  return (
    <div>
      <div>
        find countries <input 
                        value={search}
                        onChange={handleSearch}
                      />
      </div>
      <Filter searchFilter={searchFilter} />
    </div>
  );
}

export default App;
