import { ProductsPageOptions } from '../ProductsPageOptions';
import { Search } from '../Search';
import styles from './ProductsPageActions.module.scss';

export const ProductsPageActions = () => {
  return (
    <div className={styles.actions}>
      <Search />
      <ProductsPageOptions />
    </div>
  );
};