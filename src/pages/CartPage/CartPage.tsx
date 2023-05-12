import { CartCheckout } from '@components/CartCheckout';
import { CartItem } from '@components/CartItem';
import styles from './CartPage.module.scss';

export const CartPage = () => {
  return (
    <div className={styles.cart_page}>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <CartCheckout />
    </div>
  );
};