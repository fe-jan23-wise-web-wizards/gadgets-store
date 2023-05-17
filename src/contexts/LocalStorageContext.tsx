import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { CartItem } from '@/types/CartItem';
import { createContext } from 'react';

interface LocalStorageContextValue {
  favorites: string[];
  isFavorite: (productId: string) => boolean;
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  cartItems: CartItem[];
  clearCart: () => void;
  isAddedToCart: (itemId: string) => boolean;
  addToCart: (product: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  totalQuantity: number;
  totalPrice: number;
}

export const LocalStorageContext = createContext<
  LocalStorageContextValue | undefined
>(undefined);

interface LocalStorageProviderProps {
  children: React.ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  const {
    cartItems,
    addToCart,
    removeFromCart,
    isAddedToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
    totalQuantity,
  } = useCart();

  const contextValue = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    cartItems,
    clearCart,
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
