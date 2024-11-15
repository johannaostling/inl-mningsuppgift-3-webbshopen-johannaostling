
function Card({index, product, addToCart}){
console.log(JSON.stringify(index));


    return(
        <>
            <div>
                {/* <img src={imgsrc} alt="" /> */}
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <button onClick={()=>addToCart(product)}> Buy</button>
            </div>
        </>
    )
}
export default Card