import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './CartItem.module.scss';
import plusIcon from '../../assets/icons/icon-plus.svg';
import minusIcon from '../../assets/icons/icon-minus.svg';
import crossIcon from '../../assets/icons/icon-cross.svg';
import photo from '../../assets/iphone.png';

export const CartItem = () => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_info}>
          <Link to="#" className={styles.delete_button_link}>
            <img
              className={styles.delete_button_img}
              src={crossIcon}
              alt="x"
            />
          </Link>
          <img
            className={styles.phone_image}
            src={photo}
            alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
          />
          <p className={styles.content}>
            Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
          </p>
        </div>

        <div className={styles.quantity_and_price}>
          <div className={styles.quantity_buttons}>
            <div className={styles.minus}>
              <Link
                to="#"
                className={classNames(styles.quantity_buttons_minus, {
                  [styles.is_active]: true,
                })}
              >
                <img
                  className={styles.quantity_minus_img}
                  src={minusIcon}
                  alt="x"
                />
              </Link>
            </div>

            <p className={styles.quantity_buttons_number}>1</p>

            <div className={styles.plus}>
              <Link to="#" className={styles.quantity_buttons_plus}>
                <img
                  className={styles.quantity_lus_img}
                  src={plusIcon}
                  alt="x"
                />
              </Link>
            </div>
          </div>

          <p className={styles.phone_price}>$999</p>
        </div>
      </div>
    </>
  );
};