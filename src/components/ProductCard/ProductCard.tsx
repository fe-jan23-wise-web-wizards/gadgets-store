import React from 'react';

import styles from './ProductCard.module.scss';

export const ProductCard: React.FC = () => (
  <div className={styles.product_card}>
    <img 
      src="src/assets/phones/apple-iphone-xs/spacegray/00.jpg" 
      className={styles.product_card_image}
      alt="IPhone-Xs"
    />

    <h2 className={styles.product_card_title}>Apple iPhone Xs 64GB Space Gray (iMT9G2FS/A)</h2>

    <div className={styles.product_card_price}>
      <span className={styles.product_card_price_actual}>$799</span>
      <span className={styles.product_card_price_default}>$899</span>
    </div>

    <div className={styles.product_card_separator}></div>

    <div className={styles.product_card_properties}>
      <div className={styles.product_card_property}>
        <span className={styles.product_card_property_title}>Screen</span>
        <span className={styles.product_card_property_value}>5.8” OLED</span>
      </div>
      
      <div className={styles.product_card_property}>
        <span className={styles.product_card_property_title}>Capacity</span>
        <span className={styles.product_card_property_value}>64 GB</span>
      </div>
      <div className={styles.product_card_property}>
        <span className={styles.product_card_property_title}>RAM</span>
        <span className={styles.product_card_property_value}>4 GB</span>
      </div>
    </div>

    <div className={styles.product_card_buttons}>
      <a href="#" className={styles.product_card_button_cart}>Add to cart</a>
      <a href="#" className={styles.product_card_button_like}>
        <img src="src/assets/icons/like-icon.svg" alt="icon" />
      </a>
    </div>
  </div>
);