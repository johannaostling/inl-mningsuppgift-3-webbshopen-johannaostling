import { useState } from 'react';
import './App.css';
import DisplayProducts from './displayProducts';
import SearchForm from './searchForm';

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
    console.log("Search value in App:", newSearch);
  };



  
  return (
    <div className="App">
      <h1>Turn a green leaf</h1>
      <SearchForm onSearch={handleSearch} />
      <div>
        <DisplayProducts searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;