import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import cartImage from '@assets/cart_empty.webp';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.scss';

import { Loader } from '@/components/Loader';
import { Product } from '@/types/Product';
import { getProduct } from '@api/requests';
import { CartCheckout } from '@components/CartCheckout';
import { CartItem } from '@components/CartItem';
import { Modal } from '@components/ModalCheckout';

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
  }, [cart]);

  useEffect(() => {
    if (redirectToHomePage) {
      window.location.href = '/';
    }
  }, [redirectToHomePage]);

  const handleCheckoutClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setRedirectToHomePage(true);
  };

  return (
    <>
      <Breadcrumbs />

      {cartQuery.isLoading ? (
        <Loader />
      ) : (
        <>
          {cart.length === 0 ? (
            <div className={styles.cart_empty}>
              <h3 className={styles.cart_empty_title}>
                Looks like your cart is empty...
              </h3>

              <img
                src={cartImage}
                alt="cart"
                className={styles.cart_empty_image}
              />

              <Link to="/" className={styles.cart_empty_button}>
                Go shopping
              </Link>
            </div>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};
