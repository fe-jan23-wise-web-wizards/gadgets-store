import classNames from 'classnames';
import { Swiper as SwiperClass } from 'swiper/types';

import styles from './SliderPaginationBullet.module.scss';

type SliderPaginationBulletProps = {
  index: number,
  sliderRef: SwiperClass | null,
  isActive: boolean,
};

export const SliderPaginationBullet = ({
  index,
  sliderRef,
  isActive,
}: SliderPaginationBulletProps) => {
  return (
    <button
      className={classNames(
        styles.slider_pagination_bullet,
        { [styles.slider_pagination_bullet_active]: isActive },
      )}
      onClick={() => sliderRef?.slideTo(index)}
    ></button>
  );
};