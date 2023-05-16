// import { CartCheckout } from '@components/CartCheckout';
// import { CartItem } from '@components/CartItem';
import styles from './CartPage.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import cartImage from '../../assets/cart_purple.png';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  return (
      <div className={styles.cart_page}>
        <Breadcrumbs />
        <div className={styles.cart_empty}>
          <h3 className={styles.cart_empty_title}>
            Looks like your cart is empty...
          </h3>

          <img 
            src={cartImage} 
            alt="cart" 
            className={styles.cart_empty_image} 
          />

          <Link
            to="/"
            className={styles.cart_empty_button}
          >
            Go shopping
          </Link>
        </div>
      </div>
  );
};