import {useState} from "react";

const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

const searchBreweries = async (query) => {
  if(query.length === 0) return [];
  const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`);
  return await response.json();
}

function App() {
  const [result, setResult] = useState([]);

  const handleChange = debounce(async (e) =>{
    const breweries = await searchBreweries(e.target.value)
    setResult(breweries.slice(0,5));
  }, 300)


  return (
    <div>
      <input onChange={handleChange} />
      {result.map((item)=> <p key={item.id}>{item.name}</p>)}
    </div>
  );
}

export default App;
