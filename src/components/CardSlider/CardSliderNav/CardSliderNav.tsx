import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

import { CardSliderNavButton } from '../CardSliderNavButton';
import { CardSliderNavButtonType } from '../CardSliderNavButtonType';

import styles from './CardSliderNav.module.scss';

type CardSliderNavProps = {
  sliderRef: SwiperClass | null,
};

export const CardSliderNav = ({ sliderRef }: CardSliderNavProps) => {
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true);

  sliderRef?.on('fromEdge', () => {
    setIsSliderStart(false);
    setIsSliderEnd(false);
  });

  sliderRef?.on('reachBeginning', () => {
    setIsSliderStart(true);
  });

  sliderRef?.on('reachEnd', () => {
    setIsSliderEnd(true);
  });

  return (
    <div className={styles.card_slider_nav}>
      <CardSliderNavButton
        type={CardSliderNavButtonType.Previous}
        isDisabled={isSliderStart}
        sliderRef={sliderRef}
      />
      <CardSliderNavButton
        type={CardSliderNavButtonType.Next}
        isDisabled={isSliderEnd}
        sliderRef={sliderRef}
      />
    </div>
  );
};