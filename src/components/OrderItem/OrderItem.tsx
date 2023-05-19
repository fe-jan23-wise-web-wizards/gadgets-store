import { Product } from '@/types/Product';
import { Link } from 'react-router-dom';
import styles from './OrderItem.module.scss';

interface OrderItemProps {
  item: Product & { quantity: number};
}

export const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_box}>
        <p>{`x${item.quantity}`}</p>
        <Link
          to={`/${item.category}/${item.itemId}`}
          className={styles.item_title}
        >
          {item.name}
        </Link>
      </div>
      
      <p className={styles.item_price}>{`$${item.price}`}</p>
    </div>
  );
};
