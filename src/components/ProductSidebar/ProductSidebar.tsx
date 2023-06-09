import { Phone } from '@/types/Phone';

import { AddToCartButton } from '@components/AddToCartButton';
import { LikeButton } from '@components/LikeButton';
import { ProductCapacities } from './ProductCapacities';

import { Accessory } from '@/types/Accessory';
import { Tablet } from '@/types/Tablet';
import { useLocalStorageContext } from '@hooks/useLocalStorageContext';
import { ProductColors } from './ProductColors';
import styles from './ProductSidebar.module.scss';

interface ProductSidebarProps {
  product: Phone | Accessory | Tablet;
  onProductChange: (newId: string) => void;
}

export const ProductSidebar = ({
  product,
  onProductChange,
}: ProductSidebarProps) => {
  const { namespaceId, capacity, screen, resolution, processor, ram, color } =
    product;

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
    removeFromCart,
  } = useLocalStorageContext();

  const isItemInCart = isAddedToCart(product.id);
  const isItemFavorite = isFavorite(product.id);

  const handleLike = () => {
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

  const handleCapacityChange = (newCapacity: string) => {
    const newProductId = `${namespaceId}-${newCapacity.toLocaleLowerCase()}-${color
      .split(' ')
      .join('-')}`;

    onProductChange(newProductId);
  };

  const handleColorChange = (newColor: string) => {
    const newProductId = `${namespaceId}-${capacity.toLocaleLowerCase()}-${newColor
      .split(' ')
      .join('-')}`;

    onProductChange(newProductId);
  };

  return (
    <>
      <div className={styles.product_colors}>
        <ProductColors
          currentColor={color}
          colors={product.colorsAvailable}
          onColorChange={handleColorChange}
          productId={product.id}
        />
      </div>

      <div className={styles.product_capacities}>
        <ProductCapacities
          currentCapacity={capacity}
          capacities={product.capacityAvailable}
          onCapacityChange={handleCapacityChange}
        />
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
        <AddToCartButton
          handleAddToCart={handleAddToCart}
          isAddedToCart={isItemInCart}
        />
        <LikeButton onLike={handleLike} isItemFavorite={isItemFavorite} />
      </div>

      {Object.entries(specs).map(([name, value]) => (
        <div key={name} className={styles.product_spec}>
          <div className={styles.product_spec_name}>{name}</div>
          <div className={styles.product_spec_value}>{value}</div>
        </div>
      ))}
    </>
  );
};
