import { getCartByUserId, postCart } from '@api/requests';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { type CartItem } from '@/types/CartItem';
import { type CartResponse } from '@/types/CartResponse';
import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo } from 'react';

export function useCart() {
  const { isSignedIn, userId } = useAuth();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartByUserId(userId || ''),
    enabled: false,
    onSuccess: ({ products }) => setCartItems(products),
    onError: () => {
      if (isSignedIn && userId) {
        cartMutation.mutate({
          userId,
          products: [],
        });
      }
    },
  });

  const cartMutation = useMutation({
    mutationFn: (cartData: CartResponse) => postCart(cartData),
    mutationKey: ['cart-mutation'],
  });

  useEffect(() => {
    if (isSignedIn && userId) {
      void cartQuery.refetch();
    }
  }, [isSignedIn]);

  const updateCartData = (data: CartItem[]) => {
    if (isSignedIn && userId) {
      const cartData = {
        userId,
        products: data,
      };

      cartMutation.mutate(cartData);
    }
  };

  useEffect(() => {
    updateCartData(cartItems);
  }, [isSignedIn, cartItems.length, cartItems]);

  const clearCart = useCallback(() => setCartItems([]), [setCartItems]);

  const isAddedToCart = useCallback(
    (itemId: string) => {
      return cartItems.some(product => product.id === itemId);
    },
    [cartItems],
  );

  const addToCart = useCallback(
    (cartItem: CartItem) => {
      setCartItems(prev => {
        return isAddedToCart(cartItem.id) ? prev : [...prev, cartItem];
      });
    },
    [isAddedToCart, setCartItems],
  );

  const removeFromCart = useCallback(
    (itemId: string) => {
      setCartItems(prev => {
        return prev.filter(cartItem => cartItem.id !== itemId);
      });
    },
    [setCartItems],
  );

  const increaseQuantity = useCallback(
    (itemId: string) => {
      setCartItems(prev => {
        const newItems = prev.map(cartItem => {
          return cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });

        console.log('first');
        updateCartData(newItems);

        return newItems;
      });
    },
    [setCartItems],
  );

  const decreaseQuantity = useCallback(
    (itemId: string) => {
      const cartItem = cartItems.find(cartItem => cartItem.id === itemId);

      if (cartItem) {
        setCartItems(prev => {
          const newItems = prev.map(cartItem => {
            return cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem;
          });

          updateCartData(newItems);

          return newItems;
        });
      }
    },
    [setCartItems, cartItems, removeFromCart],
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  }, [cartItems]);

  return {
    cartItems,
    isAddedToCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
    totalQuantity,
  } as const;
}
