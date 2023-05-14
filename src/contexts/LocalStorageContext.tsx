import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { LocalStorageContextValue } from '@/types/LocalStorageContextValue';
import { createContext } from 'react';

export const LocalStorageContext = createContext<
  LocalStorageContextValue | undefined
>(undefined);

interface LocalStorageProviderProps {
  children: React.ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const { favorites, isFavorite, addToFavorites, removeFromFavorites } =
    useFavorites();

  const {
    cartItems,
    addToCart,
    removeFromCart,
    isAddedToCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } = useCart();

  const contextValue = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    cartItems,
    isAddedToCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};
