import { getOrdersByUserId } from '@/api/requests';
import { Order } from '@/components/Order';
import { useAuth, useUser } from '@clerk/clerk-react';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { useQuery } from '@tanstack/react-query';
import styles from './OrdersPage.module.scss';

export const OrdersPage = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  const ordersQuery = useQuery({
    queryKey: ['orders'],
    queryFn: () => getOrdersByUserId(user?.id || ''),
  });

  const orders = ordersQuery?.data || [];

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <div className={styles.page_top}>
        <div className={styles.page_top_welcome}>
          <h1 className={styles.page_top_welcome_title}>
            {`Welcome, ${user?.fullName || user?.firstName || user?.username}`}
          </h1>

          <p className={styles.orders_page_welcome_email}>
            {`${user?.emailAddresses[0]}`}
          </p>
        </div>

        <button className={styles.page_top_logout} onClick={() => signOut()}>
          Log out
        </button>
      </div>

      {orders.length === 0 ? (
        <p className={styles.subtitle}>You have no orders yet</p>
      ) : (
        <>
          <p className={styles.subtitle}>Your orders</p>

          {orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </>
      )}
    </div>
  );
};
