import { useFavorites } from '@/hooks/useFavorites';
import { Product } from '@/types/Product';
import React, { FC } from 'react';

interface ContextValue {
  favorites: Product[];
  isFavorite: (itemId: string) => boolean;
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (itemId: string) => void;
}

export const LocalStorageContext = React.createContext<
  ContextValue | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
}

export const LocalStorageProvider: FC<Props> = ({ children }) => {
  const { favorites, isFavorite, addToFavorite, removeFromFavorite } =
    useFavorites();

  const contextValue = {
    favorites,
    isFavorite,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};
