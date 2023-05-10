import classNames from 'classnames';
import { Swiper as SwiperClass } from 'swiper/types';

import styles from './SliderPaginationBullet.module.scss';

type Props = {
  index: number,
  sliderRef: SwiperClass | null,
  isActive: boolean,
};

export const SliderPaginationBullet: React.FC<Props> = ({
  index,
  sliderRef,
  isActive,
}) => {
  return (
    <div
      className={classNames(
        styles.slider_pagination_bullet,
        { [styles.slider_pagination_bullet_active]: isActive },
      )}
      onClick={() => sliderRef?.slideTo(index)}
    ></div>
  );
};