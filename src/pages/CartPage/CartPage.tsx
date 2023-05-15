import { FC, useEffect, useState } from 'react';
import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { useQuery } from '@tanstack/react-query';

import { CartCheckout } from '@components/CartCheckout';
import { Product } from '@/types/Product';
import { getProduct } from '@api/requests';
import { CartItem } from '@components/CartItem';
import styles from './CartPage.module.scss';
import { Modal } from '@/components/ModalCheckout';

export const CartPage: FC = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } = useLocalStorageContext();

  const [cart, setCart] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [redirectToHomePage, setRedirectToHomePage] = useState(false);


  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => Promise.all(cartItems.map(({ id }) => getProduct(id))),
    onSuccess: data => setCart(data),
  });

  useEffect(() => {
    void cartQuery.refetch();
  }, [cartItems]);

  useEffect(() => {
    if (redirectToHomePage) {
      window.location.href = '/';
    }
  }, [redirectToHomePage]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleCheckoutClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setRedirectToHomePage(true);
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
                onCheckout={handleCheckoutClick}
              />
            </div>

            {showModal && <Modal onClose={closeModal} />}
          </div>
        </>
      ) : (
        <h1 className={styles.cart_page_title}>Cart is empty</h1>
      )}
    </div>
  );
};
