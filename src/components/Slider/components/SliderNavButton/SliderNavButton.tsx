import { useCallback, useMemo } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import classNames from 'classnames';

import { SliderNavButtonType } from '../../types/SliderNavButtonType';

import styles from './SliderNavButton.module.scss';

type Props = {
  sliderRef: SwiperClass | null,
  type: SliderNavButtonType,
};

export const SliderNavButton: React.FC<Props> = ({ sliderRef, type }) => {
  const isNextButton = useMemo(() => {
    return type === SliderNavButtonType.Next;
  }, [type]);

  const isPrevButton = useMemo(() => {
    return type === SliderNavButtonType.Previous;
  }, [type]);

  const handleClick = useCallback(() => {
    if (isNextButton) {
      sliderRef?.slideNext();
    } else {
      sliderRef?.slidePrev();
    }
  }, [sliderRef, isNextButton]);

  return (
    <a
      className={styles.slider_nav_button}
      onClick={handleClick}
    >
      <div
        className={classNames(
          { [styles.slider_nav_next_button_icon]: isNextButton },
          { [styles.slider_nav_prev_button_icon]: isPrevButton },
        )}
      ></div>
    </a>
  );
};