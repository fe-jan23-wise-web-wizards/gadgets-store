
interface OrderedProducts {
  productId: string;
  quantity: number;
} 

export interface OrderDetails {
  id: string;
  userId: string;
  products: OrderedProducts[];
  totalPrice: number;
  createdAt: string;
}