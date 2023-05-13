import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useCallback } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const isFavorite = useCallback(
    (productId: string) => favorites.some(id => id === productId),
    [favorites],
  );

  const addToFavorites = useCallback(
    (productId: string) => {
      setFavorites(prev =>
        isFavorite(productId) ? prev : [...prev, productId],
      );
    },
    [isFavorite, setFavorites],
  );

  const removeFromFavorites = useCallback(
    (productId: string) => {
      setFavorites(prev => prev.filter(favoriteId => favoriteId !== productId));
    },
    [setFavorites],
  );

  return {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  } as const;
};
