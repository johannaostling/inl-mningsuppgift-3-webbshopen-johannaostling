import products from "./databas";

function DisplayProducts(searchValue){

    console.log(products)


    const productItems = []

    for(let i=0; i<products.length; i++){
      if(products[i].name.includes(searchValue.searchValue) || products[i].description.includes(searchValue.searchValue) ){
        productItems.push(
          <div key={i}>
            <h2>{products[i].name}</h2>
            <p>Price: ${products[i].price.toFixed()}</p>
            <p>{products[i].description}</p>
            <button>Buy</button>
          </div>
        );
      }
    }

    return (
        <>
            <div>{productItems}</div>
        </>
      );

}

export default DisplayProducts