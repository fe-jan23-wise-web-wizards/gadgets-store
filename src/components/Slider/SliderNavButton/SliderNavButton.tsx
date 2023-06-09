import classNames from 'classnames';
import { useCallback } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

import { SliderNavButtonType } from '../SliderNavButtonType';

import styles from './SliderNavButton.module.scss';

type SliderNavButtonProps = {
  sliderRef: SwiperClass | null;
  type: SliderNavButtonType;
};

export const SliderNavButton = ({ sliderRef, type }: SliderNavButtonProps) => {
  const isNextButton = type === SliderNavButtonType.Next;
  const isPrevButton = type === SliderNavButtonType.Previous;

  const handleClick = useCallback(() => {
    if (isNextButton) {
      sliderRef?.slideNext();
    } else {
      sliderRef?.slidePrev();
    }
  }, [sliderRef, isNextButton]);

  return (
    <button
      className={classNames(styles.slider_nav_button, {
        [styles.slider_nav_next_button]: isNextButton,
        [styles.slider_nav_prev_button]: isPrevButton,
      })}
      onClick={handleClick}
    >
      <div
        className={classNames(
          { [styles.slider_nav_next_button_icon]: isNextButton },
          { [styles.slider_nav_prev_button_icon]: isPrevButton },
        )}
      ></div>
    </button>
  );
};
