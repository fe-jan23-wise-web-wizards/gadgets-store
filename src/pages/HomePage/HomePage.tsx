import { ShopByCategory } from '@components/ShopByCategory';
import { Slider } from "@components/Slider";
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Slider />
      <ShopByCategory />
    </div>
  );
};
