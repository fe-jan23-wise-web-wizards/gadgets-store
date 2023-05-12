import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

import { getAllProducts, getProductDetails} from '@api/requests';

import { Category } from '@/types/Category';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BackButton } from '@/components/BackButton';
import { ProductSidebar } from '@/components/ProductSidebar';
import { ProductAbout } from '@/components/ProductAbout';
import { ProductTechSpecs } from '@/components/ProductTechSpecs';
import { CardSlider } from '@/components/CardSlider';

import styles from './ProductPage.module.scss';
import { ImageSlider } from '@/components/ImageSlider';

export const ProductPage = () => {
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const category = pathname.slice(1).split('/').shift() as Category;

  const productQuery = useQuery({
    queryKey: [`${id}`],
    queryFn: () => getProductDetails(id),
  });

  const recommendedProductsQuery = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn: () => getAllProducts(),
  });

  const recommendedProducts = recommendedProductsQuery.data || [];
  
  const product = productQuery?.data;

  return (
    <>
      <Breadcrumbs />

      <BackButton category={category} />

      {product && (
        <>
          <h1 className={styles.product_title}>
            {product.name}
          </h1>

          <div className={styles.product_details}>
            <div className={styles.product_details_slider}>
              <ImageSlider productImages={product.images}/>
            </div>
            
            <div className={styles.product_details_sidebar}>
              <ProductSidebar product={product} />
            </div>
          </div>

          <div className={styles.product_description}>
            <div className={styles.product_description_about}>
              <ProductAbout description={product.description} />
            </div>
            
            <div className={styles.product_description_tech}>
              <ProductTechSpecs product={product} />
            </div>
          </div>

          <CardSlider
            title={'You may also like'}
            products={recommendedProducts}
          />
        </>
      )}
    </>
  );
};
