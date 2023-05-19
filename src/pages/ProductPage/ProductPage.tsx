import { getProductDetails, getRecommendedProducts } from '@api/requests';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { BackButton } from '@components/BackButton';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { CardSlider } from '@components/CardSlider';
import { ProductAbout } from '@components/ProductAbout';
import { ProductSidebar } from '@components/ProductSidebar';
import { ProductTechSpecs } from '@components/ProductTechSpecs';

import { Category } from '@/types/Category';
import { ImageSlider } from '@components/ImageSlider';
import { Loader } from '@components/Loader';
import { useRef } from 'react';
import styles from './ProductPage.module.scss';

const getNamespace = (productId: string) => {
  const split = productId.split('-');

  return split.slice(0, split.length - 2).join('-');
};

export const ProductPage = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const category = pathname.slice(1).split('/').shift() as Category;
  const currentProductId = useRef(id);
  const isVariant = useRef(false);

  const productDetailsQuery = useQuery({
    queryKey: [`${getNamespace(id)}`],
    queryFn: () =>
      getProductDetails(isVariant.current ? currentProductId.current : id),
    refetchOnWindowFocus: false,
    onSuccess: () => {
      isVariant.current = false;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    onSettled: () => {
      void recommendedProductsQuery.refetch();
    },
    onError: () => navigate('/404'),
    retry: false,
  });

  const recommendedProductsQuery = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn: () => getRecommendedProducts(currentProductId.current),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
    onError: () => navigate('/404'),
  });

  const product = productDetailsQuery?.data;
  const recommendedProducts = recommendedProductsQuery.data || [];

  const handleProductChange = (newId: string) => {
    const newPathname = `/${category}/${newId}`;

    isVariant.current = true;
    window.history.replaceState(null, '', `${newPathname}`);
    currentProductId.current = newId;

    void productDetailsQuery.refetch();
  };

  return (
    <>
      <Breadcrumbs lastCrumb={product?.name || ''} />

      <BackButton category={category} />

      {productDetailsQuery.isInitialLoading ? (
        <Loader />
      ) : (
        <>
          {product && (
            <>
              <h1 className={styles.product_title}>{product.name}</h1>

              <div className={styles.product_details}>
                <div className={styles.product_details_slider}>
                  <ImageSlider productImages={product.images} />
                </div>

                <div className={styles.product_details_sidebar}>
                  <ProductSidebar
                    product={product}
                    onProductChange={handleProductChange}
                  />
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
      )}
    </>
  );
};
