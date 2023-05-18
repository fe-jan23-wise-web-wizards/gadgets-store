import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import cartEmptyImage from '@assets/cart_empty.webp';
import cartSuccessImage from '@assets/success.webp';
import { useAuth } from '@clerk/clerk-react';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { useMutation,useQuery } from '@tanstack/react-query';
import { useEffect,useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styles from './CartPage.module.scss';

import { Loader } from '@/components/Loader';
import { OrderDetails } from '@/types/OrderDetails';
import { Product } from '@/types/Product';
import { getProduct,placeOrder } from '@api/requests';
import { CartCheckout } from '@components/CartCheckout';
import { CartItem } from '@components/CartItem';

export const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
    totalQuantity,
  } = useLocalStorageContext();

  const { userId, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => Promise.all(cartItems.map(({ id }) => getProduct(id))),
    onSuccess: data => setCart(data),
  });

  const orderMutation = useMutation({
    mutationFn: (newOrder: Omit<OrderDetails, 'createdAt' | 'id'>) => {
      return placeOrder(newOrder);
    },
    onSuccess: () => {
      clearCart();
      setCart([]);
    },
  });

  useEffect(() => {
    void cartQuery.refetch();
  }, [cartItems]);

  const handleCheckoutClick = async () => {
    if (isSignedIn && userId) {
      const orderDetails = {
        userId,
        totalPrice,
        products: cartItems.map(({ id, quantity }) => {
          return { productId: id, quantity };
        }),
      };

      orderMutation.mutate(orderDetails);
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <>
      <Breadcrumbs />

      {cartQuery.isLoading || orderMutation.isLoading ? (
        <Loader />
      ) : (
        <>
          {cartItems.length === 0 ? (
            <div className={styles.cart_empty}>
              <h3 className={styles.cart_empty_title}>
                {orderMutation.isSuccess
                  ? 'Thank you for your purchase!'
                  : 'Looks like your cart is empty...'}
              </h3>

              <img
                src={
                  orderMutation.isSuccess ? cartSuccessImage : cartEmptyImage
                }
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
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
