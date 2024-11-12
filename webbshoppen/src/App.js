import { useState } from 'react';
import './App.css';
import DisplayProducts from './DisplayProducts';
import SearchForm from './searchForm';
import Cart from './cart';




function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([])

  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
    console.log("Search value in App:", newSearch);
  };

  const addToCart = (product) =>{
    setCart((prevCart) => [...prevCart, product])
  }

  
  return (
    <div className="App">
      <h1>Turn a green leaf</h1>
        <SearchForm onSearch={handleSearch} />
        <div>
        <Cart cart={cart} />
      </div>
      <div>
        <DisplayProducts searchValue={searchValue} addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default App;