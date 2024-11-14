import products from "./databas";
import styles from './DisplayProducts.module.css'

function DisplayProducts({searchValue, addToCart}){


    // console.log(products)

    const productItems = products
    .filter(product =>
      product.name.includes(searchValue) || 
      product.description.includes(searchValue)
    )
    .map((product, i) => (
      <div key={i} className={styles.CardForProducts}>
        <h2>{product.name}</h2>
        <p>Price: ${product.price.toFixed()}</p>
        <p>{product.description}</p>
        <a href="">INFO</a>
        <button onClick={() => addToCart(product)}>Buy</button>
      </div>
    ));
    
    return (
        <>
            <div>
            {productItems}
            </div>
        </>
      );

}   


export default DisplayProducts