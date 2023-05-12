import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Product } from '@/types/Product';
import { useCallback } from 'react';

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
    value,
    favorites: value,
    isFavorite,
    addToFavorite,
    removeFromFavorite,
  } as const;
}
