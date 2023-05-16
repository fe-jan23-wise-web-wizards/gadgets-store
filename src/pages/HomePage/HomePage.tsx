import { useQuery } from '@tanstack/react-query';

import { CardSlider } from '@/components/CardSlider';
import { getNewProducts, getProductsWithDiscount } from '@api/requests';
import { SignOutButton, useSession } from '@clerk/clerk-react';
import { ShopByCategory } from '@components/ShopByCategory';
import { Slider } from '@components/Slider';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { session } = useSession();

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
      <h1 className={styles.homepage_title}>Welcome to Nice Gadgets store!</h1>

      <Slider />

      {session?.user ? (
        <>
          <SignOutButton />

          <Link to={'/orders'}>Orders Page</Link>
        </>
      ) : (
        <Link to={'/sign-in'}>Sign In</Link>
      )}

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
