import { useState } from 'react';
import styles from './AddToCartButton.module.scss';

export const AddToCartButton: React.FC = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    !isAddedToCart 
    ? <button
        className={styles.product_card_button_cart}
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    : <button
        className={styles.product_card_button_added_to_cart}
        onClick={handleAddToCart}
      >
        Added to cart
      </button>
  );
};