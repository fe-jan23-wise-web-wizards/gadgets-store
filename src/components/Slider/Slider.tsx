import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

import { SliderItem } from './components/SliderItem';
import { SliderPagination } from './components/SliderPagination';
import {
  SliderNavPrevButton,
} from './components/SliderNavButtons/SliderNavPrevButton';
import {
  SliderNavNextButton,
} from './components/SliderNavButtons/SliderNavNextButton';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/swiper-bundle.min.css";
import styles from './Slider.module.scss';

const bannersPaths = [
  'src/assets/banner-phones.png',
  'src/assets/banner-tablets.png',
  'src/assets/banner-accessories.png',
];

export const Slider = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  swiperRef?.on('slideChange', () => {
    setActiveSlideIndex(swiperRef.realIndex);
  });

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.sliderContent}>
          <SliderNavPrevButton sliderRef={swiperRef} />

          <div className={styles.swiper_wrapper}>
            <Swiper
              slidesPerView={1}
              onSwiper={setSwiperRef}
              loop={true}
              autoplay={{delay: 5000, disableOnInteraction: false}}
            >
              {bannersPaths.map(bannerPath => (
                <SwiperSlide key={bannerPath}>
                  <SliderItem bannerPath={bannerPath} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <SliderNavNextButton sliderRef={swiperRef} />
        </div>

        <SliderPagination
          sliderRef={swiperRef}
          activeSlideIndex={activeSlideIndex}
          bannerPaths={bannersPaths}
        />
      </div>
    </>
  );
};