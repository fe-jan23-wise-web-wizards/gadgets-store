import { Phone } from '@/types/Phone';
import { Tablet } from '@/types/Tablet';
import { Accessory } from '@/types/Accessory';

import { AddToCartButton } from '@/components/AddToCartButton';
import { LikeButton } from '@/components/LikeButton';
import { ProductCapacities } from './ProductCapacities';

import styles from './ProductSidebar.module.scss';
import { ProductColors } from './ProductColors';
import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';


interface ProductSidebarProps {
  product: Phone | Tablet | Accessory;
}

export const ProductSidebar = ({ product }: ProductSidebarProps) => {
  const { screen, resolution, processor, ram } = product;

  const specs = {
    Screen: screen,
    Resolution: resolution,
    Processor: processor,
    RAM: ram,
  };

  const {
    removeFromFavorites,
    isFavorite,
    addToFavorites,
    isAddedToCart,
    addToCart,
    removeFromCart
  } = useLocalStorageContext();

  const isItemInCart = isAddedToCart(product.id);
  const isItemFavorite = isFavorite(product.id);

  const handleLikeButtonClick = () => {
    isFavorite(product.id)
      ? removeFromFavorites(product.id)
      : addToFavorites(product.id);
  };

  const handleAddToCart = () => {
    if (isItemInCart) {
      removeFromCart(product.id);
    } else {
      addToCart({
        id: product.id,
        price: product.priceDiscount,
        quantity: 1,
      });
    }
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
        <AddToCartButton handleAddToCart={handleAddToCart} isAddedToCart={isItemInCart}/>
        <LikeButton onLike={handleLikeButtonClick} isItemFavorite={isItemFavorite} />
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