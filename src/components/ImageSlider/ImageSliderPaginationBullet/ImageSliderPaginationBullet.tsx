import classNames from 'classnames';

import styles from './ImageSliderPaginationBullet.module.scss';

type ImageSliderPaginationBulletProps = {
  image: string,
  isActive: boolean,
  onClick: () => void,
};

export const ImageSliderPaginationBullet = ({
  image,
  isActive,
  onClick,
}: ImageSliderPaginationBulletProps) => {
  const backroundStyles = {
    backgroundImage: `url(${image})`,
  };

  return (
    <button
      className={classNames(
        styles.pagination_bullet,
        { [styles.pagination_bullet_active]: isActive },
      )}
      style={backroundStyles}
      onClick={onClick}
    />
  );
};