import { Product } from '@/types/Product';
import { useCallback, useEffect, useState } from 'react';

type Key = 'favorites' | 'cart';

function useLocalStorage<T>(key: Key, defaultValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Product[]>('favorites', []);

  const addFavorite = useCallback(
    (favorite: Product) => {
      setFavorites(prevFavorites => {
        if (prevFavorites.some(f => f.id === favorite.id)) {
          return prevFavorites;
        }
        return [...prevFavorites, favorite];
      });
    },
    [favorites],
  );

  const removeFavorite = useCallback(
    (favorite: Product) => {
      setFavorites(prevFavorites =>
        prevFavorites.filter(f => f.id !== favorite.id),
      );
    },
    [favorites],
  );

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.some(f => f.id === id);
    },
    [favorites],
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  } as const;
}

// export function useCart() {
//   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//     'cart',
//     []
//   );
//
//   const addItemToCart = useCallback((item: CartItem) => {
//     setCartItems((prevCartItems) => {
//       const index = prevCartItems.findIndex((i) => i.id === item.id);
//       if (index === -1) {
//         return [...prevCartItems, item];
//       }
//       const updatedCartItems = [...prevCartItems];
//       updatedCartItems[index].quantity += item.quantity;
//       return updatedCartItems;
//     });
//   }, [setCartItems]);
//
//   const removeItemFromCart = useCallback((id: string) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((i) => i.id !== id)
//     );
//   }, [setCartItems]);
//
//   const updateItemQuantity = useCallback((id: string, quantity: number) => {
//     setCartItems((prevCartItems) => {
//       const index = prevCartItems.findIndex((i) => i.id === id);
//       if (index === -1) {
//         return prevCartItems;
//       }
//       const updatedCartItems = [...prevCartItems];
//       updated
