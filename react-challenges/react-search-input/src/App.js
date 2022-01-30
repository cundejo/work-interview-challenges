import React, {useEffect, useState} from "react";

const getBreweries = async (query) => {
  if(!query) return [];
  return fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`).then((res) => res.json())
}

const useBrewery = (initialQuery) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    const idTimeout = setTimeout(
      () => getBreweries(query)
        .then((data) => {
          setResults(data.slice(0,5));
          setIsLoading(false);
        }).catch(err => setError(err)),
      300
    )
    return () => clearTimeout(idTimeout);
  }, [query])

  return {results, isLoading, error, onQuery: setQuery};
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const {results, isLoading, onQuery} = useBrewery();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onQuery(e.target.value)
  }

  return <>
    <div>
      <input value={inputValue} onChange={handleChange} type="text" placeholder="type the name of the brewery"/>
    </div>
    <div>{isLoading && 'Loading...'}</div>
    <div>
      {results.map((brewery, index)=><p key={index}>{brewery.name}</p>)}
    </div>
  </>
}

export default App;
