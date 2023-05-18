import { Link } from 'react-router-dom';
import styles from './OrderItem.module.scss';
import { Product } from '@/types/Product';

interface OrderItemProps {
  item: Product;
}

export const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className={styles.item}>
      <Link to={`/${item.category}/${item.itemId}`}className={styles.item_title}>
        {item.name}
      </Link>

      <p className={styles.item_price}>
        {`$${item.price}`}
      </p>
    </div>
  );
};