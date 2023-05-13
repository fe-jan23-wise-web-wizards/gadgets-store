import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { Product } from '@/types/Product';
import { AddToCartButton } from '../AddToCartButton';
import { LikeButton } from '../LikeButton';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { removeFromFavorite, isFavorite, addToFavorite } =
    useLocalStorageContext();

  const isItemFavorite = isFavorite(product.itemId);

  const handleLikeButtonClick = () => {
    if (isFavorite(product.itemId)) {
      removeFromFavorite(product.itemId);
    } else {
      addToFavorite(product);
    }
  };

  const titleSplit = product.name.split(' ');
  const titleFirstRow = titleSplit.slice(0, titleSplit.length - 2).join(' ');
  const titleSecondRow = titleSplit.slice(titleSplit.length - 2).join(' ');

  return (
    <div className="grid_item">
      <div className={styles.product_card}>
        <img
          src={`${import.meta.env.VITE_API_URL}/static/${product.image}`}
          className={styles.product_card_image}
          alt={product.name}
        />

        <a href="#">
          <h2 className={styles.product_card_title}>
            {titleFirstRow}
            <br />
            {titleSecondRow}
          </h2>

          <div className={styles.product_card_price}>
            <span className={styles.product_card_price_actual}>
              {'$' + product.price}
            </span>

            <span className={styles.product_card_price_default}>
              {'$' + product.fullPrice}
            </span>
          </div>
        </a>

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
          <AddToCartButton />
          <LikeButton
            onLike={handleLikeButtonClick}
            isItemFavorite={isItemFavorite}
          />
        </div>
      </div>
    </div>
  );
};
