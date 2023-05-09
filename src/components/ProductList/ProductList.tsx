import React from 'react';

import styles from './ProductList.module.scss';
import { ProductCard } from '../ProductCard';

export const ProductList: React.FC = () => {
  return (
    <>
      <div className={styles.product_list}>
        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>

        <div className={styles.product_list_item}>
          <ProductCard />
        </div>
      </div>
    </>
  );
};