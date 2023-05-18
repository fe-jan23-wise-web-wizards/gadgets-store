import { CartItem } from './CartItem';

export interface CartResponse {
  userId: string;
  products: CartItem[];
}
