import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Product } from '@/types/Product';
import { useCallback } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const isFavorite = useCallback(
    (itemId: string) => {
      return favorites.some(f => f.itemId === itemId);
    },
    [favorites],
  );

  const addToFavorite = useCallback(
    (product: Product) => {
      setFavorites(prev => {
        if (isFavorite(product.itemId)) {
          return prev;
        }

        return [...prev, product];
      });
    },
    [isFavorite, setFavorites],
  );

  const removeFromFavorite = useCallback(
    (itemId: string) => {
      setFavorites(prev => {
        return prev.filter(product => product.itemId !== itemId);
      });
    },
    [setFavorites],
  );

  return {
    favorites,
    isFavorite,
    addToFavorite,
    removeFromFavorite,
  } as const;
}
