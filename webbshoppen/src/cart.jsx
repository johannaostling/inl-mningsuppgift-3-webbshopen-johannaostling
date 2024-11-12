export default function Cart({ cart }) {
    const totalSum = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <>
        <h3>Cart</h3>
        <div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index}>
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed()}</p>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>The cart is empty.</p>
          )}
        </div>
        <p>Sum: ${totalSum.toFixed()}</p>
      </>
    );
  }