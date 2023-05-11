import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: any[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.product_list}>
      {products.map(product => (
        <div key={product.itemId} className={styles.product_list_item}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
