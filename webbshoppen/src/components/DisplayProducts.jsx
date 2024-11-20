import Card from "./Card";
import products from "./databas";

function DisplayProducts({searchValue, addToCart}){

// Uses the search to filter the products that matches either by name or description
    console.log(products)

    const productItems = products
    .filter(product =>
      product.name.includes(searchValue) || 
      product.description.includes(searchValue)
    )
    // Card styles and add html element to the matched prducts
    .map((product, i) => {

    return <Card index={i} product={product} addToCart={addToCart} />
    });
    
    return (
        <>
            <div>
            {productItems}
            </div>
        </>
      );

}   


export default DisplayProducts