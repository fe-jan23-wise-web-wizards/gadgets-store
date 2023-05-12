import { Product } from '@/types/Product';
import React from 'react';
import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
}

export const ProductList = React.memo(({ products }: ProductListProps) => {
  return (
    <div className={styles.product_list}>
      {products.map(product => (
        <div key={product.itemId} className={styles.product_list_item}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
});
