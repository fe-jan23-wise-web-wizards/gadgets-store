import likeIconFilled from '@assets/icons/like-icon-filled.svg';
import likeIcon from '@assets/icons/like-icon.svg';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './LikeButton.module.scss';

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={classNames(styles.like_button, {
        [styles.like_button_pressed]: isLiked,
      })}
      onClick={handleLike}
    >
      <img src={!isLiked ? likeIcon : likeIconFilled} alt="favourite" />
    </button>
  );
};
