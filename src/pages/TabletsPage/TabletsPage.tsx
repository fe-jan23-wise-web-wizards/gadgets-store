import { getProductsByCategory } from "@/api/requests";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductList } from "@/components/ProductList";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";

export const TabletsPage = () => {
  const tabletsQuery = useQuery({
    queryKey: ['tablets'],
    queryFn: () => getProductsByCategory(Category.TABLETS),
  });

  return (
    <>
      <Breadcrumbs />
      <h1>Tablets</h1>
      <ProductList products={tabletsQuery?.data || []} />
    </>
  );
};
