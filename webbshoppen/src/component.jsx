

export default function Component(){

    return(
        <>
        <div>
        <h2>{products.name}</h2>
        <p>Price: ${products.price.toFixed()}</p>
        <p>{products.description}</p>
        <button>Buy</button>
    </div>
        </>
    )
}
