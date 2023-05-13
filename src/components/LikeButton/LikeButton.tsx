import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import React, { FC } from 'react';
import styles from './LikeButton.module.scss';

interface Props {
  onLike: () => void;
  isItemFavorite: boolean;
}

export const LikeButton: FC<Props> = React.memo(
  ({ onLike, isItemFavorite }) => {
    return (
      <button className={styles.like_button} onClick={onLike}>
        <img src={isItemFavorite ? likeIconFilled : likeIcon} alt="favourite" />
      </button>
    );
  },
);
