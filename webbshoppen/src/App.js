import { useState } from 'react';
import './App.css';
import DisplayProducts from './DisplayProducts';
import SearchForm from './searchForm';
import Cart from './cart';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([])
  console.log(cart)

  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
    console.log("Search value in App:", newSearch);
  };

  const addToCart = (product) =>{
    setCart((prevCart) =>{
      const existingProduct = prevCart.find((item) => item.product_number === product.product_number);
      
      if(existingProduct){
        return prevCart.map((item) => 
          item.product_number === product.product_number ? {...item, qty: item.qty +1} :item)
      }
      else{
        return [...prevCart, {...product, qty:1}]
      }
    }) 
  }

  const removeFromCart = (productNumber) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.product_number === productNumber
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0);

      return updatedCart;
    });
  };

  
  return (
    <div className="App">
      <h1>Turn a green leaf</h1>
      <div className='Topbar'>
        <SearchForm onSearch={handleSearch} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      <hr />
      <div>
        <DisplayProducts searchValue={searchValue} addToCart={addToCart}/>
      </div>
    </div>
  );
}



export default App;