import { Phone } from '@/types/Phone';

import { AddToCartButton } from '@/components/AddToCartButton';
import { LikeButton } from '@/components/LikeButton';
import { ProductCapacities } from './ProductCapacities';

import styles from './ProductSidebar.module.scss';
import { ProductColors } from './ProductColors';

interface ProductSidebarProps {
  product: Phone;
}

export const ProductSidebar = ({ product }: ProductSidebarProps) => {
  const { screen, resolution, processor, ram } = product;

  const specs = {
    Screen: screen,
    Resolution: resolution,
    Processor: processor,
    RAM: ram,
  };

  return (
    <>
      <div className={styles.product_colors}>
        <ProductColors colors={product.colorsAvailable} />
      </div>

      <div className={styles.product_capacities}>
        <ProductCapacities capacities={product.capacityAvailable} />
      </div>

      <div className={styles.product_price}>
        <p className={styles.product_price_actual}>
          {'$' + product.priceDiscount}
        </p>

        <p className={styles.product_price_default}>
          {'$' + product.priceRegular}
        </p>
      </div>

      <div className={styles.product_buttons}>
        <AddToCartButton />
        <LikeButton />
      </div>


      {Object.entries(specs).map(([name, value]) => (
        <div key={name} className={styles.product_spec}>
          <div className={styles.product_spec_name}>
            {name}
          </div>
          <div className={styles.product_spec_value}>
            {value}
          </div>
        </div>
      ))}
    </>
  );
};