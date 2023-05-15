import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Pagination } from '@/components/Pagination';
import { ProductsPageOptions } from '@/components/ProductsPageOptions';
import { Category } from '@/types/Category';
import { SortBy } from '@/types/SortBy';
import { getProductsByCategory, getProductsCount } from '@api/requests';
import { ProductList } from '@components/ProductList';

import { Loader } from '@/components/Loader';
import styles from './TabletsPage.module.scss';

export const TabletsPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const category = pathname.slice(1) as Category;
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const sortBy = searchParams.get('sort') as SortBy;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  const tabletsQuantityQuery = useQuery({
    queryKey: ['tabletsQuantity', category],
    queryFn: () => getProductsCount(category),
  });

  const tabletsQuantity = tabletsQuantityQuery.data?.count || 0;

  const pagesQuantity = Math.ceil(tabletsQuantity / (limit || 16));

  const tabletsQuery = useQuery({
    queryKey: ['tablets', page, limit, sortBy],
    queryFn: () => getProductsByCategory(Category.TABLETS, page, limit, sortBy),
    keepPreviousData: true,
  });

  return (
    <>
      {tabletsQuery.isFetching || tabletsQuery.isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />

          <h1 className={styles.title}>Tablets</h1>

          <p className={styles.models_quantity_info}>
            {tabletsQuantity} models
          </p>

          <ProductsPageOptions />

          <ProductList products={tabletsQuery?.data || []} />

          <Pagination quantity={pagesQuantity} />
        </>
      )}
    </>
  );
};
