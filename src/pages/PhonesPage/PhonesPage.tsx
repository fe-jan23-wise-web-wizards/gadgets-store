import { getPhones } from '@api/requests';
import { ProductList } from '@components/ProductList';
import { useQuery } from '@tanstack/react-query';
import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const phonesQuery = useQuery({
    queryKey: ['phones'],
    queryFn: () => getPhones(),
  });

  return (
    <>
      <h1 className={styles.title}>Mobile phones</h1>
      <ProductList products={phonesQuery?.data || []} />
    </>
  );
};
