import { useState } from 'react';
import styles from './Card.module.css';
import Modal from './Modal';

function Card({ index, product, addToCart }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.genereal}>
        <h2>{product.name}</h2>
        <img
          className={styles.imgstyle}
          src={product.image}
          alt="image unable to load"
        />
        <p>Price: ${product.price}</p>
        <span
          className={styles.spanstyle}
          onClick={() => setModalOpen(true)}
        >
          More info
        </span>
        <button
          className={styles.button}
          onClick={() => addToCart(product)}
        >
          Buy
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        description={product.description} img={product.image}
      />
    </>
  );
}

export default Card;