import { useCallback } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

import generalStyles from './SliderNavButton.module.scss';
import styles from './SliderNavPrevButton.module.scss';

type Props = {
  sliderRef: SwiperClass | null,
};

export const SliderNavPrevButton: React.FC<Props> = ({ sliderRef }) => {
  const handleClick = useCallback(() => {
    sliderRef?.slidePrev();
  }, [sliderRef]);

  return (
    <a
      className={generalStyles.slider_nav_button}
      onClick={handleClick}
    >
      <div className={styles.slider_nav_prev_button_icon}></div>
    </a>
  );
};