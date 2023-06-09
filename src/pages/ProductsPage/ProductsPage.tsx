import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Category } from '@/types/Category';
import { SortBy } from '@/types/SortBy';
import { getProductsByCategory, getProductsCount } from '@api/requests';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { Pagination } from '@components/Pagination';
import { ProductList } from '@components/ProductList';

import { Loader } from '@components/Loader';
import { ProductsPageActions } from '@components/ProductsPageActions';
import styles from './ProductsPage.module.scss';

const categories = Object.values(Category);

type ProductsPagesTitles = {
  [key: string]: string;
};

const productsPagesTitles = categories.reduce((titles, category) => {
  let title = '';

  switch (category) {
    case Category.PHONES:
      title = 'Mobile phones';
      break;

    default:
      title = category.toUpperCase().slice(0, 1) + category.slice(1);
      break;
  }

  titles[category] = title;

  return { ...titles };
}, {} as ProductsPagesTitles);

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const category = pathname.slice(1) as Category;
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const sortBy = searchParams.get('sort') as SortBy;
  const query = searchParams.get('query') || '';

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  const productsQuantityQuery = useQuery({
    queryKey: ['productsQuantity', category, query],
    queryFn: () => getProductsCount(category, query),
  });

  const productsQuantity = productsQuantityQuery.data?.count || 0;
  const pagesQuantity = Math.ceil(productsQuantity / (limit || 16));

  const productsQuery = useQuery({
    queryKey: ['products', category, page, limit, sortBy, query],
    queryFn: () => getProductsByCategory(category, page, limit, sortBy, query),
  });

  return (
    <div className={styles.page}>
      <Breadcrumbs />

      <h1 className={styles.title}>{productsPagesTitles[category]}</h1>

      <p className={styles.models_quantity_info}>{productsQuantity} models</p>

      <ProductsPageActions />

      {productsQuery.isInitialLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList products={productsQuery?.data || []} />

          {pagesQuantity > 1 && <Pagination quantity={pagesQuantity} />}
        </>
      )}
    </div>
  );
};
