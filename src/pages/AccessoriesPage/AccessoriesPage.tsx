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
import styles from './AccessoriesPage.module.scss';

export const AccessoriesPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const category = pathname.slice(1) as Category;
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const sortBy = searchParams.get('sort') as SortBy;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  const accessoriesQuantityQuery = useQuery({
    queryKey: ['accessoriesQuantity', category],
    queryFn: () => getProductsCount(category),
  });

  const accessoriesQuantity = accessoriesQuantityQuery.data?.count || 0;

  const pagesQuantity = Math.ceil(accessoriesQuantity / (limit || 16));

  const accessoriesQuery = useQuery({
    queryKey: ['accessories', page, limit, sortBy],
    queryFn: () =>
      getProductsByCategory(Category.ACCESSORIES, page, limit, sortBy),
    keepPreviousData: true,
  });

  return (
    <>
      {accessoriesQuery.isFetching || accessoriesQuery.isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />

          <h1 className={styles.title}>Accessories</h1>

          <p className={styles.models_quantity_info}>
            {accessoriesQuantity} models
          </p>

          <ProductsPageOptions />

          <ProductList products={accessoriesQuery?.data || []} />

          <Pagination quantity={pagesQuantity} />
        </>
      )}
    </>
  );
};
