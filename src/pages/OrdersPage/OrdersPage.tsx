import { Breadcrumbs } from '@components/Breadcrumbs';
import styles from './OrdersPage.module.scss';
import { Order } from '@/components/Order';
import { OrderDetails } from '@/types/OrderDetails';
import { Link } from 'react-router-dom';

export const OrdersPage = () => {
  const orders: OrderDetails[] = [
    {
      id: '1',
      userId: '1',
      products: [
        {
          "id": '48',
          "itemId": "apple-iphone-xs-max-64gb-spacegray",
          "category": "phones",
          "name": "Apple iPhone XS Max 64GB Spacegray",
          "fullPrice": 960,
          "price": 900,
          "screen": "6.5' OLED",
          "capacity": "64GB",
          "color": "spacegray",
          "ram": "4GB",
          "year": 2018,
          "image": "img/phones/apple-iphone-xs-max/spacegray/00.webp"
        },

        {
          "id": '33',
          "itemId": "apple-iphone-xs-max-64gb-silver",
          "category": "phones",
          "name": "Apple iPhone XS Max 64GB Silver",
          "fullPrice": 960,
          "price": 900,
          "screen": "6.5' OLED",
          "capacity": "64GB",
          "color": "silver",
          "ram": "4GB",
          "year": 2018,
          "image": "img/phones/apple-iphone-xs-max/silver/00.webp"
        },
      ],
      productIds: [
        'apple-iphone-xs-max-64gb-spacegray', 'apple-iphone-xs-max-64gb-silver',
      ],
      totalPrice: 1800,
      createdAt: '16.03.2023',
    },

    {
      id: '2',
      userId: '1',
      products: [
        {
          "id": '14',
          "itemId": "apple-iphone-xr-128gb-white",
          "category": "phones",
          "name": "Apple iPhone XR 128GB White",
          "fullPrice": 880,
          "price": 815,
          "screen": "6.1' IPS",
          "capacity": "128GB",
          "color": "white",
          "ram": "3GB",
          "year": 2018,
          "image": "img/phones/apple-iphone-xr/white/00.webp"
        },
      ],
      productIds: [
        'apple-iphone-xr-128gb-white'
      ],
      totalPrice: 815,
      createdAt: '17.03.2023',
    }
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <div className={styles.page_top}>
        <div className={styles.page_top_welcome}>
          <h1 className={styles.page_top_welcome_title}>
            {`Welcome, ${'username'}`}
          </h1>

          <p className={styles.orders_page_welcome_email}>
            {`${'example@example.com'}`}
          </p>
        </div>

        <Link
          className={styles.page_top_logout}
          to="#"
        >
          Log out
        </Link>
      </div>

      {orders.length === 0 ? (
        <p className={styles.subtitle}>
          You have no orders yet
        </p>
      ) : (
        <>
          <p className={styles.subtitle}>
            Your orders
          </p>

          {orders.map(order => (
            <Order
              key={order.id}
              order={order}
            />
          ))}
        </>
      )}
    </div>
  );
};
