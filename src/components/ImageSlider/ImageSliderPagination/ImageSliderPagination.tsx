import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

import {
  ImageSliderPaginationBullet,
} from '../ImageSliderPaginationBullet';

import styles from './ImageSliderPagination.module.scss';

type ImageSliderPaginationProps = {
  images: string[],
  sliderRef: SwiperClass | null,
};

export const ImageSliderPagination = ({
  images,
  sliderRef,
}: ImageSliderPaginationProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  sliderRef?.on('slideChange', () => (
    setActiveSlideIndex(sliderRef.realIndex)
  ));

  return (
    <div className={styles.pagination}>
      {images.map((image, index) => {
        const isActiveBullet = index === activeSlideIndex;
        const onBulletClick = () => (
          sliderRef?.slideTo(index)
        );

        return (
          <ImageSliderPaginationBullet
            key={image}
            image={`${import.meta.env.VITE_API_URL}/static/${image}`}
            isActive={isActiveBullet}
            onClick={onBulletClick}
          />
        );
      })}
    </div>
  );
};