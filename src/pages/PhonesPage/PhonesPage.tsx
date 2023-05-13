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

  const modelsQuantity = phonesQuery.data?.length || 0;

  return (
    <>
      <Breadcrumbs />

      <h1 className={styles.title}>Mobile phones</h1>

      <p className={styles.models_quantity_info}>
        {modelsQuantity} models
      </p>

      <div className={styles.options_wrapper}>
        
      </div>
      <ProductList products={phonesQuery?.data || []} />
    </>
  );
};
