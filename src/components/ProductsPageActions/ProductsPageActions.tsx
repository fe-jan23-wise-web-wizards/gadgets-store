import { ProductsPageOptions } from '../ProductsPageOptions';
import { Search } from '@components/Search';
import styles from './ProductsPageActions.module.scss';

export const ProductsPageActions = () => {
  return (
    <div className={styles.actions}>
      <Search />
      <ProductsPageOptions />
    </div>
  );
};