import styles from './Card.module.css';

function Card({index, product, addToCart}){


    return(
        <>
            <div className={styles.genereal}>
                <h2>{product.name}</h2>
                <div className={styles.box} />
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <button className={styles.button} onClick={()=>addToCart(product)}> Buy</button>
            </div>
        </>
    )
}
export default Card