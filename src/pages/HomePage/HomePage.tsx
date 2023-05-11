import { ShopByCategory } from '@components/ShopByCategory';
import { TestLocalStorage } from "@components/TestLocalStorage/TestLocalStorage";

export const HomePage = () => {
  return (
    <>
      <TestLocalStorage />

      <ShopByCategory />
    </>
  );
};
