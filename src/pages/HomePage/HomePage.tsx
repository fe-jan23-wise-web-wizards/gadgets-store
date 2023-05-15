import { useQuery } from '@tanstack/react-query';

import {
  getProductsWithDiscount,
  getNewProducts,
} from '@api/requests';
import { CardSlider } from '@/components/CardSlider';
import { ShopByCategory } from '@components/ShopByCategory';
import { Slider } from "@components/Slider";
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const newProductsQuery = useQuery({
    queryKey: ['newProducts'],
    queryFn: () => getNewProducts(),
  });

  const hotProductsQuery = useQuery({
    queryKey: ['hotProducts'],
    queryFn: () => getProductsWithDiscount(),
  });

  const newProducts = newProductsQuery.data || [];
  const hotProducts = hotProductsQuery.data || [];

  return (
    <div className={styles.homepage}>
      <h1 className={styles.homepage_title}>
        Welcome to Nice Gadgets store!
      </h1>

      <Slider />

      <CardSlider
        title={'Brand new models'}
        products={newProducts.length === 0 ? [] : newProducts}
      />

      <ShopByCategory />

      <CardSlider
        title={'Hot prices'}
        products={hotProducts.length === 0 ? [] : hotProducts}
      />
    </div>
  );
};
