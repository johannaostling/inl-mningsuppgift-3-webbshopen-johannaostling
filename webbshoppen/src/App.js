import { useState } from 'react';
import './App.css';
import DisplayProducts from './components/DisplayProducts';
import SearchForm from './components/searchForm';
import Cart from './components/cart';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([])
  console.log(cart)

  // get value from search
  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
    console.log("Search value in App:", newSearch);
  };

  // add products to cart or increase qty
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

  // removes products from cart or decrease qty
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
      <h1 className='App-header'>Turn a green leaf</h1>
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