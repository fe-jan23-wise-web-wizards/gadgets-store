import { OrderDetails } from '@/types/OrderDetails';
import styles from './Order.module.scss';
import { OrderItem } from '../OrderItem';

interface OrderProps {
  order: OrderDetails;
}

export const Order = ({ order }: OrderProps) => {
  return (
    <div className={styles.order}>
      <div className={styles.order_info}>
        <p>
          <span className={styles.order_info_title}>Order ID:</span> {order.id}
        </p>

        <p>
          <span className={styles.order_info_title}>Total items:</span> {order.productIds.length}
        </p>

        <p>
          <span className={styles.order_info_title}>Date:</span> {order.createdAt}
        </p>

        <p>
          <span className={styles.order_info_title}>Total price:</span> {order.totalPrice}
        </p>
      </div>

      <div className={styles.order_products}>
        {order.products.map(product => (
          <OrderItem
            key={product.id}
            item={product}
          />
        ))}
      </div>
    </div>
  );
};