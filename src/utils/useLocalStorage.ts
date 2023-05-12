import { Product } from '@/types/Product';
import { useCallback, useEffect, useState } from 'react';

type Key = 'favorites' | 'cart';

function getStorageValue(key: Key, defaultValue: Product[]) {
  // getting stored value
  const saved = localStorage.getItem(key) || '[]';
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: Key, defaultValue: Product[]) => {
  const [value, setValue] = useState<Product[]>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export function useFavorites() {
  const [value, setValue] = useLocalStorage('favorites', []);

  const isFavorite = useCallback(
    (itemId: string) => {
      return value.some(f => f.itemId === itemId);
    },
    [value],
  );

  const addToFavorite = useCallback(
    (product: Product) => {
      setValue(prev => {
        if (isFavorite(product.itemId)) {
          return prev;
        }

        return [...prev, product];
      });
    },
    [isFavorite, setValue],
  );

  const removeFromFavorite = useCallback(
    (itemId: string) => {
      setValue(prev => {
        return prev.filter(f => f.itemId !== itemId);
      });
    },
    [setValue],
  );

  return {
    favorites: value,
    isFavorite,
    addToFavorite,
    removeFromFavorite,
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
