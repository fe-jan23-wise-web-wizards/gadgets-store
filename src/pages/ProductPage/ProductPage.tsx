import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ImageSlider } from '@/components/ImageSlider';
import { Category } from '@/types/Category';
import { getProductDetails } from '@api/requests';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

export const ProductPage = () => {
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const category = pathname.slice(1).split('/').shift() as Category;

  const productDetailsQuery = useQuery({
    queryKey: [`${id}`],
    queryFn: () => getProductDetails(id),
  });

  return (
    <>
      <Breadcrumbs />
      <h1>{`category: ${JSON.stringify(category)}`}</h1>
      <br />
      <p>{`product details: ${JSON.stringify(productDetailsQuery.data, null, 2)}`}</p>
      <br />
      <h1>{`isError: ${JSON.stringify(productDetailsQuery.isError)}`}</h1>
      <br />
      <h1>{`isSuccess: ${JSON.stringify(productDetailsQuery.isSuccess)}`}</h1>
      <br />
      <h1>{`isLoading: ${JSON.stringify(productDetailsQuery.isLoading)}`}</h1>
      <ImageSlider productImages={productDetailsQuery.data?.images || []} />
    </>
  );
};
