import styles from './ShopByCategory.module.scss';
import phonesImage from '@/assets/category-phones.png';
import tabletsImage from '@/assets/category-tablets.png';
import accessoriesImage from '@/assets/category-accessories.png';

import { SectionTop } from '../SectionTop';
import { CategoryCard } from './CategoryCard';

export const ShopByCategory = () => {
  return (
    <section>
      <SectionTop title={'Shop by category'} />

      <div className={styles.category_cards}>
        <CategoryCard
          to={'phones'}
          title={'Mobile phones'}
          image={phonesImage}
          numberOfModels={50}
        />

        <CategoryCard
          to={'tablets'}
          title={'Tablets'}
          image={tabletsImage}
          numberOfModels={2}
        />

        <CategoryCard
          to={'accessories'}
          title={'Accessories'}
          image={accessoriesImage}
          numberOfModels={1}
        />
      </div>
    </section>
  );
};