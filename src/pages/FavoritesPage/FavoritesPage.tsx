import { getProduct } from '@/api/requests';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { Product } from '@/types/Product';
import { ProductList } from '@components/ProductList';
import { useQuery } from '@tanstack/react-query';
import { useEffect,useState } from 'react';
import styles from './FavoritesPage.module.scss';
import { Loader } from '@/components/Loader';

export const FavoritesPage = () => {
  const { favorites } = useLocalStorageContext();
  const [products, setProducts] = useState<Product[]>([]);

  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: () => Promise.all(favorites.map(id => getProduct(id))),
    onSuccess: data => setProducts(data),
  });

  useEffect(() => {
    void favoritesQuery.refetch();
  }, [favorites]);

  return (
    <>
      {!favoritesQuery.isError && (
        <div className={styles.container}>
          <Breadcrumbs />

          {favoritesQuery.isLoading || favoritesQuery.isFetching
            ? (<Loader />)
            : (
              <>
                <h1 className={styles.title}>Favourites</h1>
                <p className={styles.description}>{products.length} items</p>

                <ProductList products={products} />
              </>
            )}
        </div>
      )}
    </>
  );
};
