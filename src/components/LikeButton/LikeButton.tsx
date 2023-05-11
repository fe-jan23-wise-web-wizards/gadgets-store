import { Product } from '@/types/Product';
import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import { useFavorites } from '@utils/useLocalStorage';
import { FC } from 'react';
import styles from './LikeButton.module.scss';

interface Props {
  product: Product;
}

export const LikeButton: FC<Props> = ({ product }) => {
  const { isFavorite, addToFavorite, removeFromFavorite } = useFavorites();

  const isItemInFavorites = isFavorite(product.itemId);

  const handleLike = () => {
    if (isItemInFavorites) {
      removeFromFavorite(product);

      return;
    }

    addToFavorite(product);
  };

  return (
    <button className={styles.like_button} onClick={handleLike}>
      <img
        src={isItemInFavorites ? likeIconFilled : likeIcon}
        alt="favourite"
      />
    </button>
  );
};
