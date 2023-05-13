import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { ProductList } from '@components/ProductList';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const { favorites } = useLocalStorageContext();

  return (
    <>
      <div className={styles.container}>
        <Breadcrumbs />

        <h1 className={styles.title}>Favourites</h1>

        <p className={styles.description}>{favorites.length} items</p>

        <ProductList products={favorites} />
      </div>
    </>
  );
};
