import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  getProductsCount,
  getProductsByCategory,
} from '@api/requests';
import { SortBy } from '@/types/SortBy';
import { Category } from '@/types/Category';
import { ProductList } from '@components/ProductList';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductsPageOptions } from '@/components/ProductsPageOptions';
import { Pagination } from '@/components/Pagination';

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
    queryFn: () => getProductsByCategory(
      Category.ACCESSORIES,
      page,
      limit,
      sortBy,
    ),
    keepPreviousData: true,
  });

  return (
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
  );
};
