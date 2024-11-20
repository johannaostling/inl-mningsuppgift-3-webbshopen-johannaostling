import styles from './Cart.module.css'


export default function Cart({ cart, removeFromCart}) {
    // handels the cart in which showing products, the sum and removing products.
  const totalSum = cart.reduce((sum, item) => sum + item.qty*item.price, 0);
    
    return (
      <>
      <div className={styles.genereallstyle}>
        <h3>Cart</h3>
        <div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index}>

                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed()}</p>
                <p>{item.qty}</p>
                <button onClick={() => removeFromCart(item.product_number)}>Remove</button>
              
              </div>
            ))
          ) : (

            <p>The cart is empty.</p>

          )}
        </div>
        <p>Sum: ${totalSum.toFixed()}</p>
        </div>
      </>
    );
  }