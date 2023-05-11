import { ProductList } from '@components/ProductList';
import { useFavorites } from '@utils/useLocalStorage';
import * as React from 'react';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = React.memo(() => {
  const { favorites } = useFavorites();

  // const favoritesToShow = useMemo(() => {
  //   return storedItems;
  // }, [storedItems]);

  return (
    <section className={styles.favorites}>
      <h1 className={styles.favorites_page_title}>Favorites</h1>

      <p className={styles.favorites_page_description}>
        {favorites.length} items
      </p>

      <ProductList products={favorites} />
    </section>
  );
});
