import products from "./databas";
import styles from './DisplayProducts.module.css'

function DisplayProducts({searchValue, addToCart}){


    console.log(products)

    const productItems = products
    // const cartList=[]
    .filter(product =>
      product.name.includes(searchValue) || 
      product.description.includes(searchValue)
    )
    .map((product, i) => (
      <div key={i} className={styles.CardForProducts}>
        <h2>{product.name}</h2>
        <p>Price: ${product.price.toFixed()}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Buy</button>
      </div>
    ));


    // for(let i=0; i<products.length; i++){
    //   if(products[i].name.includes(searchValue.searchValue) || products[i].description.includes(searchValue.searchValue) ){
    //     productItems.push(
    //       <div key={i}>
    //         <h2>{products[i].name}</h2>
    //         <p>Price: ${products[i].price.toFixed()}</p>
    //         <p>{products[i].description}</p>
    //         <button onClick={() => Display(products[i].name, products[i].price, products[i].description)}>Buy</button>
    //       </div>
    //     );   
    // }

    
    return (
        <>
            <div>
            {productItems}
            </div>
        </>
      );

}   


export default DisplayProducts