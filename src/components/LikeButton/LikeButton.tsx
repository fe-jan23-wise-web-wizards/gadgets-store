import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import React, { FC, useState } from 'react';
import styles from './LikeButton.module.scss';
import classNames from 'classnames';

interface Props {
  onLike: () => void;
  isItemFavorite: boolean;
}

export const LikeButton: FC<Props> = React.memo(
  ({ onLike, isItemFavorite }) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleLike = () => {
      setIsButtonPressed(!isButtonPressed);
      onLike();
    };

    return (
      <button className={classNames(styles.like_button, {
        [styles.like_button_pressed]: isButtonPressed,
      })} onClick={handleLike}>
        <img src={isItemFavorite ? likeIconFilled : likeIcon} alt="favourite" />
      </button>
    );
  },
);
