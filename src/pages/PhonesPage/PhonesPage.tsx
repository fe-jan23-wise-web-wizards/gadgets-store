import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Category } from '@/types/Category';
import { getProductsByCategory } from '@api/requests';
import { ProductList } from '@components/ProductList';
import { useQuery } from '@tanstack/react-query';
import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const phonesQuery = useQuery({
    queryKey: ['phones'],
    queryFn: () => getProductsByCategory(Category.PHONES),
  });

  return (
    <>
      <Breadcrumbs />
      <h1 className={styles.title}>Mobile phones</h1>
      <ProductList products={phonesQuery?.data || []} />
    </>
  );
};
