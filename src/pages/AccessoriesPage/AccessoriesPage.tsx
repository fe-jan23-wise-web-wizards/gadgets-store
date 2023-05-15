import { getProductsByCategory } from '@/api/requests';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Loader } from '@/components/Loader';
import { ProductList } from '@/components/ProductList';
import { Category } from '@/types/Category';
import { useQuery } from '@tanstack/react-query';

export const AccessoriesPage = () => {
  const accessoriesQuery = useQuery({
    queryKey: ['accessories'],
    queryFn: () => getProductsByCategory(Category.ACCESSORIES),
  });

  return (
    <>
      <Breadcrumbs />

      {accessoriesQuery.isFetching || accessoriesQuery.isLoading
        ? (<Loader />)
        : (
          <>
            <h1>Accessories</h1>
            <ProductList products={accessoriesQuery?.data || []} />
          </>
        )}
    </>
  );
};
