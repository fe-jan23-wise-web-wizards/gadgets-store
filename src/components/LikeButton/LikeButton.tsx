import { Product } from '@/types/Product';
import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import { useFavorites } from '@utils/useLocalStorage';
import React, { FC, useCallback } from 'react';
import styles from './LikeButton.module.scss';

interface Props {
  product: Product;
}

export const LikeButton: FC<Props> = React.memo(({ product }) => {
  const { addToFavorite, removeFromFavorite, isFavorite } = useFavorites();

  const handleLike = useCallback(() => {
    if (isFavorite(product.itemId)) {
      removeFromFavorite(product.itemId);
    } else {
      addToFavorite(product);
    }
  }, [product, addToFavorite, removeFromFavorite, isFavorite]);

  return (
    <button className={styles.like_button} onClick={handleLike}>
      <img
        src={isFavorite(product.itemId) ? likeIconFilled : likeIcon}
        alt="favourite"
      />
    </button>
  );
});
