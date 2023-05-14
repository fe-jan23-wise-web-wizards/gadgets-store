import { CartItem } from '@/types/CartItem';

export interface LocalStorageContextValue {
  favorites: string[];
  isFavorite: (productId: string) => boolean;
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  cartItems: CartItem[];
  isAddedToCart: (itemId: string) => boolean;
  addToCart: (product: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  totalQuantity: number;
  totalPrice: number;
}
