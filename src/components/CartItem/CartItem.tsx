import classNames from 'classnames';

import { Product } from '@/types/Product';
import { FC } from 'react';
import crossIcon from '../../assets/icons/icon-cross.svg';
import minusIcon from '../../assets/icons/icon-minus.svg';
import plusIcon from '../../assets/icons/icon-plus.svg';
import styles from './CartItem.module.scss';

interface CartItemProps {
  product: Product;
  quantity: number;
  onIncrease: (itemId: string) => void;
  onDecrease: (itemId: string) => void;
  onRemove: (itemId: string) => void;
}

export const CartItem: FC<CartItemProps> = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_info}>
          <button
            onClick={() => onRemove(product.itemId)}
            className={styles.delete_button_link}
          >
            <img className={styles.delete_button_img} src={crossIcon} alt="x" />
          </button>
          <img
            className={styles.phone_image}
            src={`${import.meta.env.VITE_API_URL}/static/${product.image}`}
            alt={product.itemId}
          />
          <p className={styles.content}>{product.name}</p>
        </div>

        <div className={styles.quantity_and_price}>
          <div className={styles.quantity_buttons}>
            <div
              className={classNames(styles.minus, {
                [styles.minus_disabled]: quantity === 1,
              })}
            >
              <button
                disabled={quantity === 1}
                onClick={() => onDecrease(product.itemId)}
                className={classNames(styles.quantity_buttons_minus, {
                  [styles.is_active]: true,
                })}
              >
                <img
                  className={styles.quantity_minus_img}
                  src={minusIcon}
                  alt="x"
                />
              </button>
            </div>

            <p className={styles.quantity_buttons_number}>{quantity}</p>

            <div className={styles.plus}>
              <button
                onClick={() => onIncrease(product.itemId)}
                className={styles.quantity_buttons_plus}
              >
                <img
                  className={styles.quantity_lus_img}
                  src={plusIcon}
                  alt="x"
                />
              </button>
            </div>
          </div>

          <p className={styles.phone_price}>${product.price}</p>
        </div>
      </div>
    </>
  );
};
