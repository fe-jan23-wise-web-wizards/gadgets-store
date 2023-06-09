import { OrderDetails } from '@/types/OrderDetails';
import { getProduct } from '@api/requests';
import { useQuery } from '@tanstack/react-query';
import { OrderItem } from '../OrderItem';
import styles from './Order.module.scss';

interface OrderProps {
  order: OrderDetails;
}

export const Order = ({ order }: OrderProps) => {
  const { products, id } = order;

  const productsQuery = useQuery({
    queryKey: [`order-${id}`],
    queryFn: () =>
      Promise.all(
        products.map(async ({ productId, quantity }) => {
          const productDetails = await getProduct(productId);

          return { ...productDetails, quantity };
        }),
      ),
  });

  const productsData = productsQuery?.data || [];
  const totalItems = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <div className={styles.order}>
      <div className={styles.order_info}>
        <p>
          <span className={styles.order_info_title}>Order ID:</span> {order.id}
        </p>

        <p>
          <span className={styles.order_info_title}>Total items:</span>{' '}
          {totalItems}
        </p>

        <p>
          <span className={styles.order_info_title}>Date:</span>{' '}
          {new Date(order.createdAt).toLocaleString()}
        </p>

        <p>
          <span className={styles.order_info_title}>Total price:</span>{' '}
          <span
            className={styles.order_info_totalPrice}
          >{`$${order.totalPrice}`}</span>
        </p>
      </div>

      <>
        {productsData.map(product => (
          <OrderItem key={product.id} item={product} />
        ))}
      </>
    </div>
  );
};
