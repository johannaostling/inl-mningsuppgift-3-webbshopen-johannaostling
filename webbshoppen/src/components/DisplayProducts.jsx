import Card from "./Card";
import products from "./databas";
import styles from './DisplayProducts.module.css'

function DisplayProducts({searchValue, addToCart}){


    console.log(products)

    const productItems = products
    .filter(product =>
      product.name.includes(searchValue) || 
      product.description.includes(searchValue)
    )
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