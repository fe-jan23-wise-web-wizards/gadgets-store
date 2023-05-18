import { getFavoritesByUserId, postFavorites } from '@/api/requests';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { FavoritesResponse } from '@/types/FavoritesResponse';
import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';

export const useFavorites = () => {
  const { isSignedIn, userId } = useAuth();
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: () => getFavoritesByUserId(userId || ''),
    enabled: false,
    onSuccess: ({ products }) => {
      const productsSet = new Set([...products, ...favorites]);

      setFavorites([...productsSet]);
    },
    onError: () => {
      if (isSignedIn && userId) {
        favoritesMutation.mutate({
          userId,
          products: [],
        });
      }
    },
  });

  const favoritesMutation = useMutation({
    mutationFn: (favoritesData: FavoritesResponse) => (
      postFavorites(favoritesData)
    ),
    mutationKey: ['favorites-mutation'],
  });

  useEffect(() => {
    if (isSignedIn && userId) {
      void favoritesQuery.refetch();
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn && userId) {
      const favoritesData = {
        userId,
        products: favorites,
      };

      favoritesMutation.mutate(favoritesData);
    }
  }, [favorites.length, isSignedIn]);

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
