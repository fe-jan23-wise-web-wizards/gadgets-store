import { getProductDetails } from '@/api/requests';
import { Category } from '@/types/Category';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

export const ProductPage = () => {
  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const category = pathname.slice(1).split('/').shift() as Category;

  const productQuery = useQuery({
    queryKey: [`${id}`],
    queryFn: () => getProductDetails(category, id),
  });

  return (
    <>
      <h1>{`category: ${JSON.stringify(category)}`}</h1>
      <br />
      <p>{`product details: ${JSON.stringify(productQuery.data, null, 2)}`}</p>
      <br />
      <h1>{`isError: ${JSON.stringify(productQuery.isError)}`}</h1>
      <br />
      <h1>{`isSuccess: ${JSON.stringify(productQuery.isSuccess)}`}</h1>
      <br />
      <h1>{`isLoading: ${JSON.stringify(productQuery.isLoading)}`}</h1>
    </>
  );
};
