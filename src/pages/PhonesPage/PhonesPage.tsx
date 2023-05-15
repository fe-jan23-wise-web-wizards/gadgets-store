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
import { PhonesPageOptions } from '@components/PhonesPageOptions';
import { Pagination } from '@/components/Pagination';

import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {

  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const category = pathname.slice(1) as Category;
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const sortBy = searchParams.get('sort') as SortBy;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  const productsQuantityQuery = useQuery({
    queryKey: ['productsQuantity', category],
    queryFn: () => getProductsCount(category),
  });

  const modelsQuantity = productsQuantityQuery.data?.count || 0;

  const pagesQuantity = Math.ceil(modelsQuantity / (limit || 16));

  const phonesQuery = useQuery({
    queryKey: ['phones', page, limit, sortBy],
    queryFn: () => getProductsByCategory(Category.PHONES, page, limit, sortBy),
    keepPreviousData: true,
  });

  return (
    <>
      <Breadcrumbs />

      <h1 className={styles.title}>Mobile phones</h1>

      <p className={styles.models_quantity_info}>
        {modelsQuantity} models
      </p>

      <PhonesPageOptions />

      <ProductList products={phonesQuery?.data || []} />

      <Pagination quantity={pagesQuantity} />
    </>
  );
};
