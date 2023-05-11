import { Product } from '@/types/Product';
import { useCallback, useEffect, useMemo, useState } from "react";

type Key = 'favorites' | 'cart';

const useLocalStorage = (key: Key, initialValue: Product[]) => {
  const [storedItems, setStoredItems] = useState<Product[]>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedItems));
  }, [key, storedItems]);

  return [storedItems, setStoredItems] as const;
};
export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const isFavorite = useCallback(
    (itemId: string) => {
      return favorites.some(storedItem => storedItem.itemId === itemId);
    },
    [favorites],
  );

  const addToFavorite = (item: Product) => {
    setFavorites(prev => {
      if (isFavorite(item.itemId)) {
        return prev;
      }

      return [...prev, item];
    });
  };

  const removeFromFavorite = (item: Product) => {
    if (isFavorite(item.itemId)) {
      setFavorites(prev => prev
        .filter(storedItem => storedItem.itemId !== item.itemId));
    }
  };

  const favoritesCount = useMemo(() => favorites.length, [favorites]);

  return {
    addToFavorite,
    removeFromFavorite,
    isFavorite,
    favoritesCount,
  } as const;
};

export const useCart = () => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const isItemInCart = useCallback((itemId: string) => {
    return cart.some(storedItem => storedItem.itemId === itemId);
  }, [cart]);

  const addToCart = (item: Product) => {
    setCart(prev => {
      if (isItemInCart(item.itemId)) {
        return prev;
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (item: Product) => {
    if (isItemInCart(item.itemId)) {
      setCart(prev => prev
        .filter(storedItem => storedItem.itemId !== item.itemId));
    }
  };

  const cartCount = useMemo(() => cart.length, [cart]);

  return {
    addToCart,
    removeFromCart,
    isItemInCart,
    cartCount,
  } as const;
};
