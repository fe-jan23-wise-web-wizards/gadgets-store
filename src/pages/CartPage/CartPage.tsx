import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { Product } from '@/types/Product';
import { getProduct } from '@api/requests';
import { CartCheckout } from '@components/CartCheckout';
import { CartItem } from '@components/CartItem';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import styles from './CartPage.module.scss';

export const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } = useLocalStorageContext();

  const [cart, setCart] = useState<Product[]>([]);

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => Promise.all(cartItems.map(({ id }) => getProduct(id))),
    onSuccess: data => setCart(data),
  });

  useEffect(() => {
    void cartQuery.refetch();
  }, [cartItems]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.cart_page}>
      <button onClick={handleGoBack} className={styles.cart_page_back_button}>
        <div className={styles.cart_page_back_button_img} />

        <span className={styles.cart_page_back_button_text}>Back</span>
      </button>

      {cart.length ? (
        <>
          <h1 className={styles.cart_page_title}>Cart</h1>

          <div className={styles.cart_page_container}>
            <section className={styles.cart_page_items}>
              {cart.map(product => {
                const cartItem = cartItems.find(
                  item => item.id === product.itemId,
                );

                return (
                  <CartItem
                    key={product.itemId}
                    product={product}
                    quantity={(cartItem && cartItem.quantity) || 0}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                  />
                );
              })}
            </section>

            <div className={styles.cart_page_checkout}>
              <CartCheckout
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
              />
            </div>
          </div>
        </>
      ) : (
        <h1 className={styles.cart_page_title}>Cart is empty</h1>
      )}
    </div>
  );
};
