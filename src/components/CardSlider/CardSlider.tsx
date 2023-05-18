import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { ProductCard, ProductCardSkeleton } from '../ProductCard';
import { CardSliderNav } from './CardSliderNav';
import { Product } from '../../types/Product';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/swiper-bundle.min.css";
import styles from './CardSlider.module.scss';

type CardSliderProps = {
  title: string,
  products: Product[] | [],
};

export const CardSlider = ({ title, products }: CardSliderProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <section className={styles.card_slider}>
      <div className={styles.card_slider_header}>
        <h2 className={styles.card_slider_title}>
          {title}
        </h2>

        {products.length > 0 && (
          <CardSliderNav sliderRef={swiperRef} />
        )}
      </div>

      <div className={styles.card_slider_wrapper}>
        <Swiper
          spaceBetween={16}
          slidesPerView={'auto'}
          onSwiper={setSwiperRef}
        >
          {products.length === 0
            ? <>
                <SwiperSlide>
                  <ProductCardSkeleton />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCardSkeleton />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCardSkeleton />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCardSkeleton />
                </SwiperSlide>
              </>
          : products.map(product => (
            <SwiperSlide key={product.itemId}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <div className={styles.fade}></div>
        </Swiper>
      </div>
    </section>
  );
};