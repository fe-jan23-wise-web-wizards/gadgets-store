import { useState } from 'react';
import styles from './LikeButton.module.scss';
import likeIcon from '../../assets/icons/like-icon.svg';
import likeIconFilled from '../../assets/icons/like-icon-filled.svg';

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={styles.like_button}
      onClick={handleLike}
    >
      <img
        src={!isLiked ? likeIcon : likeIconFilled}
        alt="favourite"
      />
    </button>
  );
};
