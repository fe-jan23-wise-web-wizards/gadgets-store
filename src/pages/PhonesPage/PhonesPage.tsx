import React from 'react';
import styles from './PhonesPage.module.scss';
import { ProductList } from '../../components/ProductList';

export const PhonesPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Mobile phones</h1>
      <ProductList />
    </>
  );
};