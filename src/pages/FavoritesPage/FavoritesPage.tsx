import { Product } from '@/types/Product';
import { getProduct } from '@api/requests';
import favImage from '@assets/favorites_empty.webp';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { Loader } from '@components/Loader';
import { ProductList } from '@components/ProductList';
import { useLocalStorageContext } from '@hooks/useLocalStorageContext';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  const { favorites } = useLocalStorageContext();
  const [products, setProducts] = useState<Product[]>([]);

  const favoritesQuery = useQuery({
    queryKey: ['favorites-data'],
    queryFn: () => Promise.all(favorites.map(id => getProduct(id))),
    onSuccess: data => setProducts(data),
  });

  useEffect(() => {
    void favoritesQuery.refetch();
  }, [favorites]);

  return (
    <>
      <Breadcrumbs />

      {favoritesQuery.isLoading && favorites.length !== 0 ? (
        <Loader />
      ) : (
        <>
          {favorites.length === 0 ? (
            <div className={styles.fav_empty}>
              <h3 className={styles.fav_empty_title}>
                You have no favorites yet...
              </h3>

              <div className={styles.fav_empty_image_container}>
                <img
                  src={favImage}
                  alt="favorites"
                  className={styles.fav_empty_image}
                />
              </div>

              <Link to="/" className={styles.fav_empty_button}>
                Go shopping
              </Link>
            </div>
          ) : (
            <>
              <h1 className={styles.title}>Favourites</h1>
              <p className={styles.description}>{products.length} items</p>
              <ProductList products={products} />
            </>
          )}
        </>
      )}
    </>
  );
};
