import { Product } from "./Product";

export interface OrderDetails {
  id: string;
  userId: string;
  products: Product[];
  productIds: string[];
  totalPrice: number;
  createdAt: string;
}