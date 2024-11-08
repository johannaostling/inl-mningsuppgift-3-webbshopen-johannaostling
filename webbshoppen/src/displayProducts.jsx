import products from "./databas";
import SearchForm from "./searchForm";

function DisplayProducts(){

    console.log(products)


    const productItems = []
    for(let i=0; i<products.length; i++){
        productItems.push(
            <div key={i}>
              <h2>{products[i].name}</h2>
              <p>Price: ${products[i].price.toFixed(2)}</p>
              <p>{products[i].description}</p>
              <button>Buy</button>
            </div>
          );
    }

    return (
        <>
            <SearchForm></SearchForm>
            <h1>Our Products</h1>
            <div>{productItems}</div>
        </>
      );

}

export default DisplayProducts