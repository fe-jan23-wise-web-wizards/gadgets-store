import { getCartByUserId,postCart } from '@/api/requests';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartItem } from '@/types/CartItem';
import { CartResponse } from '@/types/CartResponse';
import { useAuth } from '@clerk/clerk-react';
import { useMutation,useQuery } from '@tanstack/react-query';
import { useCallback,useEffect,useMemo } from 'react';

export function useCart() {
  const { isSignedIn, userId } = useAuth();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartByUserId(userId || ''),
    enabled: false,
    onSuccess: ({ products }) => {
      if (products) {
        const received = JSON.parse(products) as CartItem[];

        const receivedProducts = [];

        for (const product of received) {
          const isInCart = cartItems.some(item => item.id === product.id);

          if (!isInCart) {
            receivedProducts.push(product);
          }
        }

        setCartItems([...cartItems, ...receivedProducts]);
      }
    },
    onError: () => {
      if (isSignedIn && userId) {
        cartMutation.mutate({
          userId,
          products: JSON.stringify([]),
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
  
  const updateCartData = useCallback(() => {
    if (isSignedIn && userId) {
      const cartData = {
        userId,
        products: JSON.stringify(cartItems),
      };

      cartMutation.mutate(cartData);
    }
  }, []);

  useEffect(() => {
    updateCartData();
  }, [cartItems, isSignedIn]);

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
      setCartItems(prev =>
        prev.map(cartItem => {
          return cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        }),
      );
    },
    [setCartItems],
  );

  const decreaseQuantity = useCallback(
    (itemId: string) => {
      const cartItem = cartItems.find(cartItem => cartItem.id === itemId);

      return cartItem && cartItem.quantity === 1
        ? removeFromCart(itemId)
        : setCartItems(prev =>
            prev.map(cartItem => {
              return cartItem.id === itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem;
            }),
          );
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
