import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { Product } from '@/types/Product';
import { AddToCartButton } from '../AddToCartButton';
import { LikeButton } from '../LikeButton';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCardSkeleton = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image_shimmer}></div>

      <div className={styles.product_card_title}>
        <div className={styles.title_shimmer}></div>
        <div className={styles.title_shimmer}></div>
      </div>

      <div className={styles.product_card_price}>
        <div className={styles.price_shimmer}></div>
        <div className={styles.price_shimmer}></div>
      </div>

      <div className={styles.product_card_separator}></div>

      <div className={styles.product_card_properties}>
        <div className={styles.product_card_property}>
          <div className={styles.property_title_shimmer}></div>
          <div className={styles.property_value_shimmer}></div>
        </div>

        <div className={styles.product_card_property}>
          <div className={styles.property_title_shimmer}></div>
          <div className={styles.property_value_shimmer}></div>
        </div>

        <div className={styles.product_card_property}>
          <div className={styles.property_title_shimmer}></div>
          <div className={styles.property_value_shimmer}></div>
        </div>
      </div>

      <div className={styles.product_card_buttons}>
        <div className={styles.add_button_shimmer}></div>
        <div className={styles.like_button_shimmer}></div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    removeFromFavorites,
    isFavorite,
    addToFavorites,
    isAddedToCart,
    addToCart,
    removeFromCart,
  } = useLocalStorageContext();

  const isItemInCart = isAddedToCart(product.itemId);
  const isItemFavorite = isFavorite(product.itemId);

  const handleLike = () => {
    isFavorite(product.itemId)
      ? removeFromFavorites(product.itemId)
      : addToFavorites(product.itemId);
  };

  const handleAddToCart = () => {
    if (isItemInCart) {
      removeFromCart(product.itemId);
    } else {
      addToCart({
        id: product.itemId,
        price: product.price,
        quantity: 1,
      });
    }
  };

  const titleSplit = product.name.split(' ');
  const titleFirstRow = titleSplit.slice(0, titleSplit.length - 2).join(' ');
  const titleSecondRow = titleSplit.slice(titleSplit.length - 2).join(' ');

  return (
    <div className={'grid_item'}>
      <div className={styles.product_card}>
        <a href={`/${product.category}/${product.itemId}`}>
          <figure className={styles.product_card_figure}>
            <img
              src={`${import.meta.env.VITE_API_URL}/static/${product.image}`}
              className={styles.product_card_image}
              alt={product.name}
            />
          </figure>

          <h2 className={styles.product_card_title}>
            {titleFirstRow}
            <br />
            {titleSecondRow}
          </h2>
        </a>

        <div className={styles.product_card_price}>
          <span className={styles.product_card_price_actual}>
            {'$' + product.price}
          </span>

          <span className={styles.product_card_price_default}>
            {'$' + product.fullPrice}
          </span>
        </div>

        <div className={styles.product_card_separator}></div>

        <div className={styles.product_card_properties}>
          <div className={styles.product_card_property}>
            <span className={styles.product_card_property_title}>Screen</span>
            <span className={styles.product_card_property_value}>
              {product.screen}
            </span>
          </div>

          <div className={styles.product_card_property}>
            <span className={styles.product_card_property_title}>Capacity</span>
            <span className={styles.product_card_property_value}>
              {product.capacity}
            </span>
          </div>

          <div className={styles.product_card_property}>
            <span className={styles.product_card_property_title}>RAM</span>
            <span className={styles.product_card_property_value}>
              {product.ram}
            </span>
          </div>
        </div>

        <div className={styles.product_card_buttons}>
          <AddToCartButton
            isAddedToCart={isItemInCart}
            handleAddToCart={handleAddToCart}
          />
          <LikeButton onLike={handleLike} isItemFavorite={isItemFavorite} />
        </div>
      </div> 
    </div>
  );
};
