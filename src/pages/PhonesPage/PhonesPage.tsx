import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';

import { Category } from '@/types/Category';
import { SortBy } from '@/types/SortBy';
import {
getProductsByCategory,
getProductsCount,
} from '@api/requests';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { Pagination } from '@components/Pagination';
import { ProductList } from '@components/ProductList';
import { ProductsPageOptions } from '@components/ProductsPageOptions';

import { Loader } from '@components/Loader';
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

  const phonesQuantityQuery = useQuery({
    queryKey: ['phonesQuantity', category],
    queryFn: () => getProductsCount(category),
  });

  const phonesQuantity = phonesQuantityQuery.data?.count || 0;
  const pagesQuantity = Math.ceil(phonesQuantity / (limit || 16));

  const phonesQuery = useQuery({
    queryKey: ['phones', page, limit, sortBy],
    queryFn: () => getProductsByCategory(Category.PHONES, page, limit, sortBy),
    keepPreviousData: true,
  });

  return (
    <>
      {phonesQuery.isInitialLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />
          <h1 className={styles.title}>Mobile phones</h1>

          <p className={styles.models_quantity_info}>{phonesQuantity} models</p>

          <ProductsPageOptions />

          <ProductList products={phonesQuery?.data || []} />

          <Pagination quantity={pagesQuantity} />
        </>
      )}
    </>
  );
};
