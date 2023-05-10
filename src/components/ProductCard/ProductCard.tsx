import buttonIcon from '@/assets/icons/like-icon.svg';
import { Product } from '@/types/Product';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className="grid__item">
    <div className={styles.product_card}>
      <img
        src={`${import.meta.env.VITE_API_URL}/static/${product.image}`}
        className={styles.product_card_image}
        alt={product.name}
      />

      <h2 className={styles.product_card_title}>{product.name}</h2>

      <div className={styles.product_card_price}>
        <span className={styles.product_card_price_actual}>
          {product.price}
        </span>
        <span className={styles.product_card_price_default}>
          {product.fullPrice}
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
        <a href="#" className={styles.product_card_button_cart}>
          Add to cart
        </a>
        <a href="#" className={styles.product_card_button_like}>
          <img src={buttonIcon} alt="icon" />
        </a>
      </div>
    </div>
  </div>
);
