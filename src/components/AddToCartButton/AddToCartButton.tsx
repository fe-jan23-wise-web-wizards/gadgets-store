import classNames from 'classnames';
import styles from './AddToCartButton.module.scss';

interface AddToCartButtonProps {
  isAddedToCart: boolean;
  handleAddToCart: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  isAddedToCart,
  handleAddToCart,
}) => {
  return (
    <button
      onClick={handleAddToCart}
      className={classNames(styles.product_card_button_cart, {
        [styles.product_card_button_clicked]: isAddedToCart,
      })}
    >
      {!isAddedToCart ? 'Add to cart' : 'Added to cart'}
    </button>
  );
};
