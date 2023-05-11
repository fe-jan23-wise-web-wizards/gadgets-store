import { Product } from '@/types/Product';
import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import { useFavorites } from '@utils/useLocalStorage';
import { FC, useMemo } from 'react';
import styles from './LikeButton.module.scss';

interface Props {
  product: Product;
}

export const LikeButton: FC<Props> = ({ product }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isItemInFavorites = useMemo(() => {
    return isFavorite(product.itemId);
  }, [favorites]);

  const handleLike = () => {
    if (isItemInFavorites) {
      removeFavorite(product);

      return;
    }

    addFavorite(product);
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
