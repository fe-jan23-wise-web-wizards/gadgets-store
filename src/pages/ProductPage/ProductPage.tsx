import { Category } from '@/types/Category';
import { getProductDetails,getRecommendedProducts } from '@api/requests';
import { useQuery } from '@tanstack/react-query';
import { useLocation,useParams } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CardSlider } from '@/components/CardSlider';
import { ProductAbout } from '@/components/ProductAbout';
import { ProductSidebar } from '@/components/ProductSidebar';
import { ProductTechSpecs } from '@/components/ProductTechSpecs';

import { ImageSlider } from '@/components/ImageSlider';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const category = pathname.slice(1).split('/').shift() as Category;

  // const productQuery = useQuery({
  //   queryKey: [`product-${id}`],
  //   queryFn: () => getProduct(id),
  // });

  const productDetailsQuery = useQuery({
    queryKey: [`${id}`],
    queryFn: () => getProductDetails(id),
  });

  const recommendedProductsQuery = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn: () => getRecommendedProducts(id),
  });

  const recommendedProducts = recommendedProductsQuery.data || [];

  const product = productDetailsQuery?.data;

  return (
    <>
      <Breadcrumbs />

      <BackButton category={category} />

      {product && (
        <>
          <h1 className={styles.product_title}>{product.name}</h1>

          <div className={styles.product_details}>
            <div className={styles.product_details_slider}>
              <ImageSlider productImages={product.images} />
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
