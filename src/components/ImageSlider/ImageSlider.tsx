import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { ImageSliderPagination } from './ImageSliderPagination';
import { ImageSlide } from './ImageSlide';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/swiper-bundle.min.css";
import styles from './ImageSlider.module.scss';

type ImageSliderProps = {
  productImages: string[],
};

export const ImageSlider = ({ productImages }: ImageSliderProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.slider_wrapper}>
      <ImageSliderPagination
        images={productImages}
        sliderRef={swiperRef}
      />

      <div className={styles.slider}>
        <Swiper
          slidesPerView={1}
          onSwiper={setSwiperRef}
        >
          {productImages.map(productImage => (
            <SwiperSlide key={productImage}>
              <ImageSlide image={`${import.meta.env.VITE_API_URL}/static/${productImage}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};