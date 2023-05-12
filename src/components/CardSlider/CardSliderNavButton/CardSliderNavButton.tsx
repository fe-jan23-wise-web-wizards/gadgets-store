import { useCallback } from 'react';
import classNames from 'classnames';
import { Swiper as SwiperClass } from 'swiper/types';

import { CardSliderNavButtonType } from '../CardSliderNavButtonType';

import styles from './CardSliderNavButton.module.scss';

type CardSliderNavButtonProps = {
  sliderRef: SwiperClass | null,
  type: CardSliderNavButtonType,
  isDisabled: boolean,
};

export const CardSliderNavButton = ({
  sliderRef,
  type,
  isDisabled,
}: CardSliderNavButtonProps) => {
  const isNextButton = type === CardSliderNavButtonType.Next;
  const isPreviousButton = type === CardSliderNavButtonType.Previous;

  const handleClick = useCallback(() => {
    if (isNextButton) {
      sliderRef?.slideNext();
    } else {
      sliderRef?.slidePrev();
    }
  }, [sliderRef, isNextButton]);
  
  return (
    <button
      className={classNames(
        styles.card_slider_nav_button,
        { [styles.card_slider_nav_button_disabled]: isDisabled },
      )}
      onClick={handleClick}
    >
      <div
        className={classNames(
          styles.card_slider_nav_button_icon_container,
          { [styles.card_slider_nav_next_button_icon]: isNextButton },
          { [styles.card_slider_nav_prev_button_icon]: isPreviousButton },
          { [styles.card_slider_nav_next_button_icon_disabled]: isNextButton && isDisabled },
          { [styles.card_slider_nav_prev_button_icon_disabled]: isPreviousButton && isDisabled },
        )}
      >
      </div>
    </button>
  );
};