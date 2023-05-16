import { useState } from 'react';
import SwiperCore,{ Autoplay } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

SwiperCore.use([Autoplay]);

import { SliderItem } from './components/SliderItem';
import { SliderNavButton } from './components/SliderNavButton';
import { SliderPagination } from './components/SliderPagination';
import { SliderNavButtonType } from './types/SliderNavButtonType';

const banner1 = `${import.meta.env.VITE_API_URL}/static/img/banners/banner-1.webp`;
const banner2 = `${import.meta.env.VITE_API_URL}/static/img/banners/banner-2.webp`;
const banner3 = `${import.meta.env.VITE_API_URL}/static/img/banners/banner-3.webp`;

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/swiper-bundle.min.css";
import styles from './Slider.module.scss';

const bannersPaths = [banner1, banner2, banner3];

export const Slider = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  swiperRef?.on('slideChange', () => {
    setActiveSlideIndex(swiperRef.realIndex);
  });

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.slider_content}>
          <SliderNavButton
            type={SliderNavButtonType.Previous}
            sliderRef={swiperRef}
          />

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

          <SliderNavButton
            type={SliderNavButtonType.Next}
            sliderRef={swiperRef}
          />
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