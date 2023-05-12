import { useState } from 'react';
import styles from './AddToCartButton.module.scss';
import classNames from 'classnames';

export const AddToCartButton: React.FC = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={classNames(
        styles.product_card_button_cart,
          {
            [styles.product_card_button_clicked]: isAddedToCart,
          },
      )}
    >
      {
        !isAddedToCart
          ? "Add to cart"
          : "Added to cart"
      }
    </button>
  );
};