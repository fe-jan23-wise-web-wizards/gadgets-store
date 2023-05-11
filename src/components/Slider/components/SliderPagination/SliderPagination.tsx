import { Swiper as SwiperClass } from 'swiper/types';
import { SliderPaginationBullet } from '../SliderPaginationBullet';

import styles from './SliderPagination.module.scss';

type SliderPaginationProps = {
  bannerPaths: string[],
  sliderRef: SwiperClass | null,
  activeSlideIndex: number,
};

export const SliderPagination = ({
  bannerPaths,
  sliderRef,
  activeSlideIndex,
}: SliderPaginationProps) => {
  return (
    <div className={styles.slider_pagination}>
      {bannerPaths.map((bannerPath, index) => {
        const isActiveBullet = activeSlideIndex === index;

        return (
          <SliderPaginationBullet
            key={bannerPath}
            index={index}
            isActive={isActiveBullet}
            sliderRef={sliderRef}
          />
        );
      })}
    </div>
  );
};