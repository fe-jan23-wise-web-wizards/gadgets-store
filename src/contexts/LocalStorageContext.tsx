import { useFavorites } from '@/hooks/useFavorites';
import { createContext } from 'react';

interface ContextValue {
  favorites: string[];
  isFavorite: (productId: string) => boolean;
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
}

export const LocalStorageContext = createContext<ContextValue | undefined>(
  undefined,
);

interface LocalStorageProviderProps {
  children: React.ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const { favorites, isFavorite, addToFavorites, removeFromFavorites } =
    useFavorites();

  const contextValue = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};
