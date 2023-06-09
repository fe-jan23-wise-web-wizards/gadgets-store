import { useQuery } from '@tanstack/react-query';

import { Category } from '@/types/Category';
import { getProductsCount } from '@api/requests';
import { SectionTop } from '@components/SectionTop';
import { CategoryCard } from './CategoryCard';

import accessoriesImage from '@assets/category-accessories.webp';
import phonesImage from '@assets/category-phones.webp';
import tabletsImage from '@assets/category-tablets.webp';

import styles from './ShopByCategory.module.scss';

export const ShopByCategory = () => {
  const phonesQuantityQuery = useQuery({
    queryKey: ['phonesQuantity', Category.PHONES],
    queryFn: () => getProductsCount(Category.PHONES),
  });

  const tabletsQuantityQuery = useQuery({
    queryKey: ['tabletsQuantity', Category.TABLETS],
    queryFn: () => getProductsCount(Category.TABLETS),
  });

  const accessoriesQuantityQuery = useQuery({
    queryKey: ['accessoriesQuantity', Category.ACCESSORIES],
    queryFn: () => getProductsCount(Category.ACCESSORIES),
  });

  const phonesQuantity = phonesQuantityQuery.data?.count || 0;
  const tabletsQuantity = tabletsQuantityQuery.data?.count || 0;
  const accessoriesQuantity = accessoriesQuantityQuery.data?.count || 0;

  return (
    <section className={styles.categories}>
      <SectionTop title={'Shop by category'} />

      <div className={styles.categories_cards}>
        <CategoryCard
          to={'phones'}
          title={'Mobile phones'}
          image={phonesImage}
          numberOfModels={phonesQuantity}
        />

        <CategoryCard
          to={'tablets'}
          title={'Tablets'}
          image={tabletsImage}
          numberOfModels={tabletsQuantity}
        />

        <CategoryCard
          to={'accessories'}
          title={'Accessories'}
          image={accessoriesImage}
          numberOfModels={accessoriesQuantity}
        />
      </div>
    </section>
  );
};
