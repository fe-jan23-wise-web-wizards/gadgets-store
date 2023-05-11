import { useState } from 'react';
import styles from './PrimaryButton.module.scss';

export const PrimaryButton: React.FC = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    !isAddedToCart 
    ? <a 
        href="#" 
        className={styles.product_card_button_cart}
        onClick={handleAddToCart}
        >
        Add to cart
      </a>
    : <a 
        href="#" 
        className={styles.product_card_button_added_to_cart}
        onClick={handleAddToCart}
        >
        Added to cart
      </a>
  );
};