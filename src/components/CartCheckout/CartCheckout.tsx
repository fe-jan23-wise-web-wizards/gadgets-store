import { FC } from 'react';
import styles from './CartCheckout.module.scss';

interface CartCheckoutProps {
  totalQuantity: number;
  totalPrice: number;
}

export const CartCheckout: FC<CartCheckoutProps> = ({
  totalQuantity,
  totalPrice,
}) => {
  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          <p className={styles.total_price}>{`$${totalPrice}`}</p>
          <p className={styles.number_of_items}>
            Total for {totalQuantity} items
          </p>
          <div className={styles.line}></div>
          <a className={styles.button_checkout} href="#button" data-qa="hover">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
};
